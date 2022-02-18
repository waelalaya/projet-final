import React from "react";
import FacebookLogo from "./fb.png";
import InstagramLogo from "./inst.jpg";
import TikTokLogo from "./tik_tok.png";
import TwitterLogo from "./twitter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-g">
      <div className="contact">
        <p>Adresse</p>
        <p>+216 00 00 00 00</p>
        <p>contact@YourPic.com</p>
      </div>
      <div className="social-media">
        <img src={FacebookLogo} alt="" />
        <img src={InstagramLogo} alt="" />
        <img src={TikTokLogo} alt="" />
        <img src={TwitterLogo} alt="" />
      </div>
      <p>Join now</p>
    </div>
  );
};

export default Footer;