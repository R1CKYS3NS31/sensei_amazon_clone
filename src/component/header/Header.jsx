import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* logo */}
      </div>
      <div className="header_nav"></div>
    </div>
  );
};
