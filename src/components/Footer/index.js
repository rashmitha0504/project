import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>About us</li>
        <li>Privacy policy</li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <div className="footer-copy-right">
        <hr />
        <p className="des">Reach out at pitchlabsolutions@gmail.com</p>
        <p className="des">Copyright @ 2023 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
