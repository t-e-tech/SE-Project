const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());

//MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql_nodejs",
  port: '3306'
});
db.connect((err) => {
  if (err) {
    console.log("Connection Error! = ", err);
    return;
  }
  console.log("Connected!");
});

////////////////////// FAII //////////////////////
//Product Image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/images/');
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, Math.random().toString(36).substring(2, 8) + '.' + ext);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG, PNG and GIF are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

app.get("/product", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.error("Error fetching products", error);
      res.sendStatus(500).send('Error');
    } else {
      res.send(result);
    }
  });
});

app.put('/changepassword', (req, res) => {
  const { oldPassword, newPassword } = req.body;
  // check if old password matches the one in the database
  db.query("SELECT * FROM member WHERE id = '1'", (err, result) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).send('Error');
    } else if (result.length === 0) {
      console.log('Incorrect old password');
      res.status(401).send('Incorrect old password');
    } else {
      // update the password in the database
      db.query("UPDATE member SET password = ? WHERE id = '1'", newPassword, (err, result) => {
        if (err) {
          console.log('Error:', err);
          res.status(500).send('Error');
        } else {
          console.log('Password changed');
          res.send('Password changed');
        }
      });
    }
  });
});

app.get("/address", (req, res) => {
  db.query("SELECT * FROM address", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error');
    } else {
      res.send(result);
    }
  });
});

app.get('/order_details', (req, res) => {
  db.query("SELECT * FROM order_details", (err, results, fields) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      return;
    }
    res.json(results);
  });
});

// แสดงจำนวนยอดสินค้าที่ขายได้ในเดือนนี้
app.get('/sales_this_month', (req, res) => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  db.query(`SELECT SUM(quantity) as total_sales FROM order_details WHERE order_date BETWEEN '${startOfMonth.toISOString()}' 
  AND '${endOfMonth.toISOString()}'`,
    (err, results, fields) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return;
      }
      res.json(results[0]);
    });
});

// แสดงจำนวนยอดสินค้าที่ขายได้ทั้งหมด
app.get('/total_sales', (req, res) => {
  db.query("SELECT SUM(quantity) as total_sales FROM order_details",
    (err, results, fields) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return;
      }
      res.json(results[0]);
    });
});

// แสดงยอดขายได้ในเดือนนี้
app.get('/total_price_this_month', (req, res) => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  db.query(`SELECT SUM(total_price) as total_price FROM order_details WHERE order_date BETWEEN '${startOfMonth.toISOString()}' 
  AND '${endOfMonth.toISOString()}'`,
    (err, results, fields) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return;
      }
      res.json(results[0]);
    });
});

// แสดงจำนวนยอดขายทั้งหมด
app.get('/total_price', (req, res) => {
  db.query("SELECT SUM(total_price) as total_price FROM order_details",
    (err, results, fields) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return;
      }
      res.json(results[0]);
    });
});

app.delete("/deleteproduct/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM product WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error');
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteaddress/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM address WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error');
    } else {
      res.send(result);
    }
  });
});

app.post("/createaddress", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const houseNumber = req.body.houseNumber;
  const subdistrict = req.body.subdistrict;
  const district = req.body.district;
  const province = req.body.province;
  const zipcode = req.body.zipcode;
  db.query("INSERT INTO address (name, tel, address, add1, add2, add3, addnum) VALUES (?,?,?,?,?,?,?)",
    [name, phone, houseNumber, subdistrict, district, province, zipcode],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error');
      } else {
        console.log("insert address success!");
        res.send('insert address success!');
      }
    }
  );
});


app.post("/products/add", upload.single("image"), (req, res) => {
  const { name, description, category, price, shippingCost, quantity } = req.body;
  const imagePath = "/images/" + req.file.filename;
  db.query("INSERT INTO product (product_img, product_name, product_description, product_type, product_price, product_sendprice, product_amount) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [imagePath, name, description, category, price, shippingCost, quantity],
    (error, results) => {
      if (error) {
        console.error("Error adding product", error);
        res.sendStatus(500);
        return;
      }
      console.log("Product added:", results);
      res.sendStatus(200);
    }
  );
});


////////////////////// NICK //////////////////////
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  db.query("INSERT INTO member (username, password, email) VALUES (?, ?, ?)",
    [username, password, email], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving user to database');
      } else {
        console.log(result);
        res.status(200).send('User saved to database');
      }
    }
  );
});



app.listen(5000, () => console.log('Server is runing on port 5000'))