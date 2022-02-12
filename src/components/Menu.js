import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Menu.css";
const Menu = ({ menu }) => {
  const tl = useRef();
  const AllComponent = useRef();
  const SideMenuContent = useRef();
  const SideMenuFooter = useRef();
  const Furniture = useRef();
  const SubMenues = useRef();

  useEffect(() => {
    gsap.set(SideMenuFooter.current, { y: -100, opacity: 0 });
    tl.current = gsap
      .timeline({ paused: true })
      .to(AllComponent.current, 1, { x: "-95.6%" })
      .to(SideMenuContent.current, { duration: 1, y: 0, opacity: 1 })
      .to(SideMenuFooter.current, { duration: 1, y: 0, opacity: 1 }, "-=1");

    SubMenues.current = gsap.to(SubMenues.current, 1, {
      opacity: 1,
      display: "block",
      paused: true,
    });
    Furniture.current = gsap.to(Furniture.current, 1, {
      opacity: 1,
      display: "block",
      y: 100,
      paused: true,
    });
  }, []);

  useEffect(() => {
    if (menu === true) {
      tl.current.play();
    }
    if (menu === false) {
      tl.current.reverse();
    }
  }, [menu]);

  const onMouseEnterHandlerCollection = () => {
    SubMenues.current.play();
  };
  const onMouseLeaveHandlerCollection = () => {
    SubMenues.current.reverse();
  };
  const onMouseEnterHandlerFurniture = () => {
    Furniture.current.play();
  };
  const onMouseLeaveHandlerFurniture = () => {
    Furniture.current.reverse();
  };

  return (
    <>
      <div ref={AllComponent} className="side-menu">
        <div ref={SideMenuContent} className="flex-side-menu">
          <ul className="side-menu-display">
            <li
              onMouseEnter={onMouseEnterHandlerCollection}
              onMouseLeave={onMouseLeaveHandlerCollection}
              className="side-menu-titles collection"
            >
              <div>
                <a>Collection</a>
              </div>
              <ul ref={SubMenues} className="collection-submenu">
                <li
                  onMouseEnter={onMouseEnterHandlerFurniture}
                  onMouseLeave={onMouseLeaveHandlerFurniture}
                >
                  <a>Furniture</a>
                </li>
                <li>Lighting</li>
                <li>Accesories</li>
              </ul>
            </li>
            <li className="side-menu-titles">Design</li>
            <li className="side-menu-titles">Craftmanship</li>
            <li className="side-menu-titles">Ethics</li>
          </ul>
          <img
            ref={Furniture}
            src="/recursos/Sofá blanco.png"
            className="image-side-menu"
          />
        </div>
        <div ref={SideMenuFooter} className="side-menu-footer">
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Dealers</h1>
          <h1>News</h1>
          <h1>Care</h1>
          <h1>Press</h1>
        </div>
      </div>
    </>
  );
};

export default Menu;
