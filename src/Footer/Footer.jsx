import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Footer() {
  return <>
    <footer className={`footer text-white pt-4 ${style.footerBg}`}>
  <div className="container py-5">
    <div className="row text-center">
      <div className="col-12 col-md-4 pt-3">
        <h2>LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <span>Clark, MO 65243</span>
      </div>
      <div className="col-12 col-md-4 pt-3">
        <h2>AROUND THE WEB</h2>
        <ul className="d-flex justify-content-center list-unstyled gap-3">
          <li><FaFacebookF className="fs-4"/></li>
          <li><FaTwitter className="fs-4"/></li>
          <li><FaLinkedin className="fs-4"/></li>
          <li><AiOutlineGlobal className="fs-4"/></li>
        </ul>
      </div>
      <div className="col-12 col-md-4 pt-3">
        <h2>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    
  </div>
  <p className= {`text-center mt-4 mb-0 py-3 ${style.footerText}`}>
      © 2023 Your Company Name
    </p>
</footer>

    </>
}
