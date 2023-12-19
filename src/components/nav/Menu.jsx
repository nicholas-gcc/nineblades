import React from "react";
import styled from "./Menu.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import { createPortal } from "react-dom";
import logo from "../../assets/9b_logo_new-removebg.png";
import { IoCloseSharp } from "react-icons/io5";

const Menu = ({ setIsOpen }) => {
  // close menu
  const handleMenu = () => setIsOpen(false);

  return createPortal(
    <nav className={styled.menu}>
      <Container>
        <div className={styled.menu__header}>
          <div className={styled["menu__header--logo"]}>
            <figure>
              <img src={logo} alt="Logo" />
            </figure>
            <p></p>
          </div>

          <IoCloseSharp size={30} color="var(--primary)" onClick={handleMenu} />
        </div>

        <ul className={styled.menu__items}>
        <li>
            <Link smooth to="#home">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="#journey">
              The Journey
            </Link>
          </li>

          <li>
            <Link smooth to="#programs">
              Personal Training
            </Link>
          </li>

          <li>
            <Link smooth to="#join">
              Location
            </Link>
          </li>

          <li>
            <Link smooth to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </nav>,
    document.getElementById("menu")
  );
};

export default Menu;
