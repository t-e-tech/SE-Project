import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;


/*
ไฟล์ HomeScreen.js เป็นส่วนหน้าจอหลักของเว็บไซต์ มีการนำเข้า Header และ Footer ที่เป็น component ที่สร้างไว้แล้ว โดยมีส่วนสำคัญดังนี้
ShopSection: เป็น component ที่แสดงสินค้าทั้งหมด โดยรับ props เป็น keyword และ pagenumber ซึ่งจะถูกส่งมาจาก URL โดยจะใช้เป็นเงื่อนไขในการกรองและแสดงสินค้า
CalltoActionSection: เป็นส่วนที่แสดงปุ่ม Call to Action เพื่อชี้แจงเกี่ยวกับโปรโมชั่นหรือโปรโมชั่นใหม่ล่าสุดของเว็บไซต์
ContactInfo: เป็นส่วนที่แสดงข้อมูลติดต่อของเว็บไซต์ เช่น ที่อยู่, เบอร์โทรศัพท์, อีเมล และ social media ต่าง ๆ ที่สามารถติดต่อได้
โดยส่วนที่ดูและจัดการ URL นั้นจะถูกทำโดย Router ซึ่งจะเป็นไฟล์ที่แยกออกมาเป็น component ต่าง ๆ เพื่อจัดการกับการ routing ในเว็บไซต์
*/