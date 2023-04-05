import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReviewReducer,
  productDetailsReducer,
  productListReducer,
} from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./Reducers/OrderReducres";

const reducer = combineReducers({
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
  : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

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