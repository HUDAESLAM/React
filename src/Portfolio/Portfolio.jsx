import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Portfolio.module.css";
import { FaStar } from "react-icons/fa";
import Port1 from "../assets/poert1.png";
import Port2 from "../assets/port2.png";
import Port3 from "../assets/port3.png";
import Port4 from "../assets/poert1.png";
import Port5 from "../assets/port2.png";
import Port6 from "../assets/port3.png";

const images = [Port1, Port2, Port3, Port4, Port5, Port6];

export default function Portfolio() {
  const [currentImage, setCurrentImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (img) => {
    setCurrentImage(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <div className="container text-center py-5">
        <h1 className="text-center fw-bold  text-uppercase">portfolio section</h1>
                <div className="d-flex align-items-center fw-bold justify-content-center gap-3 my-3">
                  <div className={`${style.line}`}></div>
                  <FaStar />
                  <div className={`${style.line}`}></div>
                </div>

        <div className="row g-4">
          {images.map((img, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className={`${style["image-wrapper"]} position-relative`}
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Portfolio ${index}`}
                  className="w-100 rounded-0"
                  style={{ cursor: "pointer" }}
                />
                <div className={style.overlay}>
                  <span className={style.plusIcon}>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
            onClick={closeModal}
          >
            <img
              src={currentImage}
              alt="Big view"
              className={`${style.modalImage}`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </>
  );
}
