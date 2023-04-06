import { createStore, combineReducers, applyMiddleware } from "redux"; //import ฟังก์ชัน createStore, combineReducers, และ applyMiddleware จากไลบรารี redux เพื่อใช้สร้าง Redux store และรวม reducer และ middleware ในการจัดการ state
import thunk from "redux-thunk"; //import middleware ชื่อว่า thunk จากไลบรารี redux-thunk เพื่อใช้ในการจัดการส่ง request แบบ asynchronous ที่เกี่ยวข้องกับการดึงข้อมูลจาก API
import { composeWithDevTools } from "redux-devtools-extension"; //import ฟังก์ชัน composeWithDevTools จาก redux-devtools-extension เพื่อใช้สร้าง enhancer ที่ช่วยให้เราสามารถใช้ DevTools ในการ debug การทำงานของ Redux store ได้ง่ายขึ้น
import {
  productCreateReviewReducer,
  productDetailsReducer,
  productListReducer,
} from "./Reducers/ProductReducers"; // import reducer ที่เกี่ยวข้องกับ product จากไฟล์ ProductReducers.js
import { cartReducer } from "./Reducers/CartReducers"; // import reducer ที่เกี่ยวข้องกับ product จากไฟล์ ProductReducers.js
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducers"; //import reducer ที่เกี่ยวข้องกับ user จากไฟล์ userReducers.js
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./Reducers/OrderReducres"; //import reducer ที่เกี่ยวข้องกับ order จากไฟล์ OrderReducers.js

const reducer = combineReducers({
  //การรวม reducer ที่ได้ import มาเป็นชุดเดียวกันด้วยฟังก์ชัน combineReducers() เพื่อสร้าง root reducer ที่จัดการกับ state ของแต่ละส่วนของโปรแกรม
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []; //การดึงข้อมูลต่างๆ จาก LocalStorage โดยตรวจสอบการมีข้อมูลใน key "cartItems" หากมีให้ทำการแปลงข้อมูลจาก string เป็น object ด้วยฟังก์ชัน JSON.parse() หากไม่มีให้กำหนดให้เป็น array ว่าง

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null; //เป็นการเข้าถึงข้อมูลที่ถูกเก็บไว้ใน Local Storage ของเบราว์เซอร์ โดยการเรียกใช้ฟังก์ชัน localStorage.getItem() โดยส่งชื่อ key เข้าไป ในที่นี้คือ "userInfo" โดยหากมีข้อมูลที่เก็บไว้ใน Local Storage ด้วย key ชื่อ "userInfo" ฟังก์ชัน JSON.parse() จะถูกใช้ในการแปลงข้อมูล JSON ให้กลายเป็น Object และถูกเก็บไว้ในตัวแปร userInfoFromLocalStorage โดยหากไม่มีข้อมูลจะ return null แทน โดยค่าเริ่มต้นของ userInfoFromLocalStorage คือ null ถ้าไม่มีข้อมูลที่เก็บไว้ใน Local Storage ด้วย key ชื่อ "userInfo"

// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {}; //ตัวแปร shippingAddressFromLocalStorage คือตัวแปรที่เก็บค่าที่ได้มาจาก localStorage ที่มีชื่อว่า "shippingAddress" โดยมีการตรวจสอบก่อนว่ามีข้อมูลใน localStorage หรือไม่ด้วยเงื่อนไข localStorage.getItem("shippingAddress") โดยถ้ามีข้อมูลใน localStorage จะทำการแปลงข้อมูลด้วย JSON.parse(localStorage.getItem("shippingAddress")) เพื่อให้เป็น object และถ้าไม่มีข้อมูลใน localStorage ก็จะให้ค่าเป็น object ว่าง {} แทน

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
}; //initialState เป็น object ที่ใช้กำหนดค่าเริ่มต้นให้กับ state ใน Redux store โดยปกติจะเป็นค่าว่างๆ หรือค่า default เพื่อให้ state เริ่มต้นขึ้นมาในรูปแบบที่ต้องการ ในที่นี้มีสองส่วนคือ cart และ userLogin โดย cart จะมี key cartItems และ shippingAddress ที่ได้มาจากการอ่านค่า localStorage และ userLogin จะมี key userInfo ที่ได้มาจากการอ่านค่า localStorage เช่นกัน

const middleware = [thunk]; //เป็น array ที่เก็บ middleware ที่ต้องการใช้ใน Redux store ในที่นี้ใช้ thunk เป็น middleware หนึ่ง

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); //store เป็น instance ของ Redux store ที่ถูกสร้างขึ้นโดยใช้ฟังก์ชัน createStore ที่รับ parameter 3 ตัวคือ reducer, initialState, และ middleware โดย reducer จะเป็นการรวม reducer ที่เราได้นิยามไว้ด้านบนของไฟล์ และ initialState จะเป็น object ที่เรากำหนดไว้ข้างต้น ส่วน middleware จะเป็น thunk middleware ที่เรากำหนดไว้ด้านบนของไฟล์ด้วยเช่นกัน และใช้ composeWithDevTools เพื่อเป็นตัวช่วยในการเชื่อมต่อกับ Redux DevTools Extension ใน browser

export default store;

/*
โค้ด store.js เป็นไฟล์ที่ใช้สำหรับสร้าง store ของ Redux ซึ่งประกอบด้วยฟังก์ชันต่าง ๆ ที่จำเป็นในการจัดการข้อมูลและการแชร์ข้อมูลระหว่าง component ต่าง ๆ ในแอปพลิเคชัน React ของเรา

บรรทัดที่ 1 ถึง 8: import libraries ที่จำเป็นสำหรับสร้าง store ของ Redux ใน React
บรรทัดที่ 10 ถึง 23: import reducers ที่จำเป็นสำหรับการจัดการข้อมูลที่เกี่ยวข้องกับ product, cart, user, order ของแอปพลิเคชัน
บรรทัดที่ 25 ถึง 31: สร้าง reducer โดยรวมของทุก reducers ที่เรา import เข้ามา
บรรทัดที่ 33 ถึง 43: กำหนดค่าเริ่มต้นของ state ใน store โดยใช้ข้อมูลจาก local storage เพื่อให้สามารถทำงานร่วมกับตัวอื่นๆ ในแอปพลิเคชันได้ตลอดเวลา
บรรทัดที่ 45 ถึง 46: กำหนด middleware ในการใช้งาน thunk middleware สำหรับเป็นตัวกลางในการจัดการกับ async ในการดึงข้อมูล
บรรทัดที่ 48 ถึง 53: สร้าง store โดยรวม reducer ที่สร้างไว้และกำหนด state เริ่มต้นของ store และใช้ composeWithDevTools() เพื่อใช้งาน Redux DevTools Extension และ applyMiddleware() เพื่อเชื่อมต่อ middleware ของ thunk ไปยัง store
สุดท้ายนำ store ออกมาใช้งานโดย export default store; ข้างล่างของไฟล์ store.js
*/

/*
store.js เป็นไฟล์ที่ใช้สร้าง Redux store โดยใช้ฟังก์ชัน createStore ที่เป็นฟังก์ชันของ Redux เพื่อสร้าง store โดยที่มี reducer, initial state และ middleware ตามที่กำหนดไว้ด้านบน โดยไฟล์นี้มีรายละเอียดดังนี้:
combineReducers คือฟังก์ชันที่ใช้ในการรวม reducer หลายๆ ตัวเข้าด้วยกันเพื่อเป็น reducer เดียว โดย reducer จะรับ state เดิม และ action เข้ามาแล้ว return state ใหม่ออกไป ในไฟล์นี้ได้รวม reducer ทั้งหมดที่ใช้ในโปรเจ็คเข้าด้วยกัน เช่น reducer สำหรับสินค้า (productReducers.js), reducer สำหรับตะกร้าสินค้า (cartReducers.js), reducer สำหรับผู้ใช้ (userReducers.js) และ reducer สำหรับการสั่งซื้อสินค้า (orderReducers.js)
thunk คือ middleware ที่ใช้สำหรับการจัดการกับ async action ใน Redux โดยจะใช้ฟังก์ชัน dispatch ในการส่ง action ไปยัง reducer ต่างๆ ของ Redux
composeWithDevTools เป็น middleware ที่ใช้ในการเชื่อมต่อกับ Redux DevTools เพื่อช่วยในการ debug และติดตามการเปลี่ยนแปลงของ state ใน Redux store
cartItemsFromLocalStorage, userInfoFromLocalStorage, และ shippingAddressFromLocalStorage เป็นตัวแปรที่ใช้ในการเก็บข้อมูลลงใน local storage เพื่อใช้เป็น initial state ในการสร้าง Redux store หากมีข้อมูลอยู่ใน local storage แล้ว
initialState คือ state เริ่มต้นของ Redux store โดยจะเป็น object ที่ประกอบไปด้วยค่า initial state ของตัวแปร cart และ userLogin
store คือ instance ของ Redux store ที่ถูกสร้างขึ้นโดยใช้ฟังก์ชัน createStore()  ซึ่งมี parameter 3 ตัว ได้แก่ reducer, initialState, และ middleware
ซึ่งเราสามารถนำมากำหนดการทำงานของ store ได้ โดย store เป็นตัวจัดการ state ของแอพพลิเคชั่นและมีความสำคัญอย่างมากในการทำงานของ Redux ในแอพพลิเคชั่นของเรา
*/

/*
Redux เป็น library ของ JavaScript ที่ช่วยให้การจัดการ state ของแอพพลิเคชั่นง่ายขึ้น โดย Redux
เน้นการจัดการ state ของแอพพลิเคชั่นให้อยู่ในรูปแบบของ "single source of truth"
ซึ่งหมายความว่า state ทั้งหมดของแอพพลิเคชั่นจะถูกเก็บไว้ใน object เดียวที่เรียกว่า "store"
*/

/*
Middleware ใน Redux คือฟังก์ชันที่รับค่า action เข้ามาและสามารถปรับปรุงหรือทำงานก่อนที่ action จะถึง reducer ได้ ซึ่งมีประโยชน์ในการจัดการข้อมูลก่อนที่จะถูกเข้าสู่สถานะถัดไป และยังช่วยให้สามารถเขียนโค้ดที่สามารถ reuse ได้และเป็นระเบียบมากขึ้น
Middleware สามารถใช้สำหรับการปรับปรุง state และ action หรือดำเนินการแบบเชิงตรรกะ รวมถึงใช้สำหรับการแจ้งเตือนผู้ใช้งานหรือบันทึกข้อมูลก่อนส่งเข้าสู่ระบบและอื่นๆ ตามต้องการ
ในโค้ดที่ให้มานี้ มี middleware คือ thunk ซึ่งเป็น middleware ที่ใช้สำหรับจัดการกับฟังก์ชัน async และเรียกใช้งาน API โดยสามารถใช้ dispatch เพื่อส่ง action เข้าไปยัง Redux store ได้ โดยที่ไม่ต้องรอให้เสร็จสิ้นการทำงานของ API ก่อน ซึ่งจะช่วยให้สามารถจัดการ state ได้สะดวกและยืดหยุ่นมากขึ้น
*/

/*
ใน Redux มีคอนเซปต์ของ reducer ซึ่งเป็นฟังก์ชันที่รับ state 
และ action เพื่ออัปเดต state ใหม่ โดย reducer 
จะไม่แก้ไข state ที่ถูกส่งเข้ามาโดยตรงแต่จะสร้าง state ใหม่ตามข้อมูลจาก action 
โดยเรียกว่า "pure function" เนื่องจากฟังก์ชัน reducer จะไม่มีผลข้างเคียงที่ไม่คาดคิด (side effects) เช่น การเปลี่ยนแปลงค่าของตัวแปรนอกฟังก์ชัน
Reducer จะมีการรับ state และ action เป็น parameter แล้วคืนค่า state ใหม่
โดย reducer จะถูกใช้โดย store เพื่อรวม state ที่ถูกส่งเข้ามาจากหลายๆ action 
และทำให้ state อัปเดตโดยเรียกใช้ reducer ให้เปลี่ยนแปลง state ของ application ใหม่
*/

/*
Instance เป็นคำศัพท์ที่ใช้ในการอธิบายวัตถุหรือ object ที่ถูกสร้างขึ้นจากคลาสหรือ constructor แล้วมีอยู่จริงในหน่วยความจำของโปรแกรม 
ซึ่งสามารถเรียกใช้งานฟังก์ชันหรือเมท็อดที่อยู่ในคลาสหรือ constructor นั้น ๆ ได้ โดย instance จะเป็นสิ่งที่แตกต่างจาก class หรือ constructor เอง 
ซึ่ง class หรือ constructor เป็นแบบแม่แบบ (template) ที่ใช้ในการสร้าง instance ใหม่ ๆ ได้หลายตัว 
ซึ่งแต่ละตัวจะมีคุณสมบัติและค่าคงที่ (property) ที่แตกต่างกันไปตามการกำหนดค่าใน constructor หรือฟังก์ชันของ class นั้น ๆ 
ดังนั้น instance เป็นแบบเดียวกันกับ object ในภาษาโปรแกรมมิ่งอื่น ๆ ซึ่งหมายถึงตัวแปรที่ถูกสร้างขึ้นจากคลาสหรือ constructor และมีคุณสมบัติและการทำงานตามที่ได้ระบุไว้ในคลาสหรือ constructor นั้น ๆ
*/
