import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./เต้/Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
ใช้ในการให้ทุก Component ในส่วนของ React ที่อยู่ในที่เดียวกันเข้าถึง store ของ Redux ได้โดยตรง
โดยที่ไม่ต้องผ่าน props หรือการส่งข้อมูลผ่าน component tree หลายชั้นเพื่อเข้าถึง store เดียวกัน
*/
