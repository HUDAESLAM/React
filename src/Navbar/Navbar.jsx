import React from "react";
import { NavLink , Link} from "react-router-dom";
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark  fw-bold position-sticky ${style.bg}`}>
        <div className="container">
          <Link className="navbar-brand fs-2 text-uppercase" to={"/"}>
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link px-4" aria-current="page" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-4 " to={"/portfolio"}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link px-4 " to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
        </div>
        </div>
      </nav>
    </>
  );
}
