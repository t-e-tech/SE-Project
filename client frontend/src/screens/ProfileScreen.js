import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import ProfileTabs from "../components/profileComponents/ProfileTabs";
import { getUserDetails } from "../Redux/Actions/userActions";
import Orders from "./../components/profileComponents/Orders";
import moment from "moment";
import { listMyOrders } from "../Redux/Actions/OrderActions";

//ประกาศฟังก์ชัน ProfileScreen และใช้งาน Hook ของ React ด้วย useEffect และ useSelector
const ProfileScreen = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();

  //ตัวแปร userLogin และ orderListMy ถูกนำเข้าโดยใช้ useSelector โดย userLogin ใช้สำหรับดึงข้อมูลของผู้ใช้งานที่ลงชื่อเข้าใช้และ orderListMy ใช้สำหรับดึงรายการสั่งซื้อของผู้ใช้งาน
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading, error, orders } = orderListMy;

  //ใช้ useEffect สำหรับดึงข้อมูลสั่งซื้อและข้อมูลผู้ใช้งานที่มีการเปลี่ยนแปลง โดยใช้ dispatch เพื่อเรียกใช้ Action ของ Redux เพื่อดึงข้อมู
  useEffect(() => {
    dispatch(listMyOrders());
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div className="col-lg-4 p-0 shadow ">
            <div className="author-card pb-0 pb-md-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img src="./images/user.png" alt="userprofileimage" />
                </div>
                <div className="author-card-details col-md-7">
                  <h5 className="author-card-name mb-2">
                    <strong>{userInfo.name}</strong>
                  </h5>
                  <span className="author-card-position">
                    <>Joined {moment(userInfo.createdAt).format("LL")}</>
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard pt-3 ">
              <div class="d-flex align-items-start">
                <div
                  class="nav align-items-start flex-column col-12 nav-pills me-3 "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile Settings
                  </button>
                  <button
                    class="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Orders List
                    <span className="badge2">{orders ? orders.length : 0}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* panels */}
          <div
            class="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProfileTabs />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <Orders orders={orders} loading={loading} error={error} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

/*
เป็นหน้าโปรไฟล์ของผู้ใช้งาน โดยมีการเรียกใช้งานคอมโพเนนต์ต่าง ๆ และเมื่อโหลดหน้าโปรไฟล์จะมีการดึงข้อมูลผู้ใช้งานและรายการสั่งซื้อของผู้ใช้งานด้วยฟังก์ชัน getUserDetails และ listMyOrders จาก Redux store โดยใช้ useSelector และ useDispatch เพื่อเข้าถึงข้อมูล state และการส่ง dispatch action ไปยัง reducer ตามลำดับ

โดยส่วนที่สำคัญของโค้ดมีดังนี้

Header: คอมโพเนนต์ Header เป็น header ของหน้าโปรไฟล์
ProfileTabs: คอมโพเนนต์ ProfileTabs เป็น tabs ของโปรไฟล์ที่แสดงข้อมูลต่าง ๆ ของผู้ใช้งาน
Orders: คอมโพเนนต์ Orders เป็นตารางแสดงรายการสั่งซื้อของผู้ใช้งาน
useSelector: ฟังก์ชัน hook ที่ใช้ในการเข้าถึงข้อมูล state จาก Redux store
useDispatch: ฟังก์ชัน hook ที่ใช้ในการส่ง dispatch action ไปยัง reducer
useEffect: ฟังก์ชัน hook ที่ใช้ในการดึงข้อมูลเมื่อโหลดหน้าโปรไฟล์หรือเมื่อมีการเปลี่ยนแปลง state
โดยทั้งหมดนี้ถูกนำมาเรียงลำดับให้เป็นหน้าโปรไฟล์ของผู้ใช้งาน ซึ่งแบ่งออกเป็นส่วน header, tabs, และตารางรายการสั่งซื้อของผู้ใช้งาน
*/