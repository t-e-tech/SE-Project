const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
// my sql connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mysql_nodejs',
    port:'8889'
})
connection.connect((err) => {
    if (err){
        console.log('Error connecting to MYSQL database = ',err)
        return;
    }
    console.log('MySQL successfully connectde');
})
app.post("/create" ,async (req,res) =>{
     const { name,type ,Extra,img}=req.body;
     try{
         connection.query(
            "INSEST INTO donetion(name,type ,Extra,img) VALUSE(?,?,?,?)",
            [name,type ,Extra,img] ,
            (err,results,fields)=> {
                if(err){
                    console.log("Error while inserting auser into the database".err)
                    return res.status(400).send();
                }
                return res.status(201).json({ massage :"New users successfully created!"});
            }
         )
     }catch(err){
        console.log(err);
        return res.status(500).send();
     }
})
app.get("/read",async(req,res)=>{
    try{
        connection.query("SELECT *FROM users WHERE id = ?",[id],(err,results,fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})
app.patch("/updatepoint/:id",async (req,res)=>{
    const id =res.params.id;
    const newstatus =res.body.newstatus;
    try{
        connection.query("UPDATE users SET status =? WHERE id=?",[newstatus,id],(err,results,fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json({massage:"user updated"})
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})
app.patch("/updateshop/:id",async (req,res)=>{
    const id =res.params.id;
    const newstatus =res.body.newstatus;
    try{
        connection.query("UPDATE users SET status =? WHERE id=?",[newstatus,id],(err,results,fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json({massage:"user updated"})
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})
app.patch("/updateorder/:id",async (req,res)=>{
    const id =res.params.id;
    const newstatus =res.body.newstatus;
    try{
        connection.query("UPDATE users SET status =? WHERE id=?",[newstatus,id],(err,results,fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json({massage:"user updated"})
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})
app.delete("/deletepoint/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM donet WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
app.listen(3000,() => console.log('Server is runnig on port 3000'));
