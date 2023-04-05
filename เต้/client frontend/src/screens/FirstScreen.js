import React from "react";

const FirstScreen = () => {
  const handleLink3000 = () => {
    window.location.href = "http://localhost:3000/homescreen";
  };

  const handleLink4000 = () => {
    window.location.href = "http://localhost:4000/";
  };

  return (
    <div className="firstpage">
      <button className="firstpage-button" onClick={handleLink3000}>Buyer</button>
      <button className="firstpage-button" onClick={handleLink4000}>Seller</button>
    </div>
  );
};

export default FirstScreen;
