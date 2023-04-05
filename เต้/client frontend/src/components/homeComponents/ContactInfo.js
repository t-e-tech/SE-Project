import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Kasetsart University Sriracha Campus</h5>
            <p>Software Engineering</p>
            <p>03603341</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Create by</h5>
            <p>Pattaraton Prangprakhon</p>
            <p>Haruethai Uthainit</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Group</h5>
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
