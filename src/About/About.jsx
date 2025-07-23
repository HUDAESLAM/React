import React, { useEffect } from "react";
import style from "./About.module.css";
import { FaStar } from "react-icons/fa";

export default function About() {

  useEffect(() => {
      document.title = "About";
    }, []);

  return (
    <>
      <div
        className={`text-white d-flex flex-column justify-content-center align-items-center ${style.intro}`}
      >
        <div className="container">
          <h1 className="text-uppercase text-center">about component</h1>
        <div className="d-flex align-items-center justify-content-center gap-3 my-3">
          <div className={`${style.line}`}></div>
          <FaStar />
          <div className={`${style.line}`}></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
