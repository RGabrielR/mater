import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './MainContent.css';
const MainContent = ({ focusFurniture }) => {
  const tl = useRef();
  const furnitures = useRef();
  const furniture1 = useRef();
  const furniture2 = useRef();
  useEffect(() => {
    const movingFurnitures = furnitures.current;
    const vanishingFurniture1 = furniture1.current;
    const vanishingFurniture2 = furniture2.current;
    if (focusFurniture === 1) {
      tl.current = gsap
        .timeline()
        .to(movingFurnitures, {
          duration: 1,
          y: 0,
        })
        .to(
          vanishingFurniture2,
          {
            duration: 1,
            opacity: 0,
          },
          "-=1"
        )
        .to(
          vanishingFurniture1,
          {
            duration: 1,
            opacity: 1,
          },
          "-=1"
        );
    }
    if (focusFurniture === 2) {
      tl.current = gsap
        .timeline()
        .to(movingFurnitures, {
          duration: 1,
          y: '-55%',
        })
        .to(
          vanishingFurniture2,
          {
            duration: 0.5,
            opacity: 1,
          },
          "-=1"
        )
        .to(
          vanishingFurniture1,
          {
            duration: 0.5,
            opacity: 0,
          },
          "-=1"
        );
    }
  }, [focusFurniture]);

  return (
      <div className="relative-position">
    <div ref={furnitures}>
      <div ref={furniture1} className="MainContent-display">
        <div className="furniture-info">
          <p className="author">Michael W. Dreeben</p>
          <p className="title">Shell Dining Chair</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            lacus pharetra, maximus sapien eget, fermentum enim.{" "}
          </p>
        </div>
        <img className="image-info" src="/recursos/Silla negra.png" />
      </div>
      <div ref={furniture2} className="MainContent-display">
        <div className="furniture-info">
          <p className="author">Jeaper K. Thomas</p>
          <p className="title">Dunes Anthrazite Black</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            lacus pharetra, maximus sapien eget, fermentum enim.{" "}
          </p>
        </div>
        <img className="image-info" src="/recursos/Mesa negra.png" />
      </div>
    </div>
    <div className="product-details">Product details</div>
    </div>
      );
};

export default MainContent;
