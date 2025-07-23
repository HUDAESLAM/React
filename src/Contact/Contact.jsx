import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import style from "./Contact.module.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold pt-4 text-uppercase">
          conatct section
        </h1>
        <div className="d-flex align-items-center fw-bold justify-content-center gap-3 my-3">
          <div className={`${style.line}`}></div>
          <FaStar />
          <div className={`${style.line}`}></div>
        </div>
        <form className="w-50 mx-auto py-5">
          <div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="UserName"
              />
              <label htmlFor="floatingInput">UserName</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="UserAge"
              />
              <label htmlFor="floatingInput">UserAge</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">UserEmail</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingInput"
                placeholder="UserPassword"
              />
              <label htmlFor="floatingInput">UserPassword</label>
            </div>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
