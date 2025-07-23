import React, { useEffect } from "react";
import Avatar from "../assets/avataaars.svg";
import { FaStar } from "react-icons/fa";
import style from './Home.module.css'

export default function Home() {

  useEffect(() => {
      document.title = "Home";
        console.log("✅ Home component loaded");

    }, []);

  return (
    <>
      <div className={`text-white d-flex justify-content-center align-items-center text-center ${style.intro}`}>
      <div>
        <img
          src={Avatar}
          alt="profile"
          className="avatarImg mb-3 "
        />
        <h1 className="fw-bold text-uppercase">start Framework</h1>
        <div className="d-flex align-items-center justify-content-center gap-3 my-3">
          <div className={`${style.line}`}></div>
          <FaStar />
          <div className={`${style.line}`}></div>
        </div>
        <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
  );
}
