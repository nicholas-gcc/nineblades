import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaTiktok,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styled.footer__container}>
      <Container className={styled.footer}>
        <ul className={styled.footer__links}>
          <Heading className="small--white" heading="Links" />
          <li>
            <Link smooth to="#home">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="#classes">
              The Journey
            </Link>
          </li>

          <li>
            <Link smooth to="#programs">
              Personal Training
            </Link>
          </li>

          <li>
            <Link smooth to="#membership">
              Location
            </Link>
          </li>

          <li>
            <Link smooth to="#locations">
              Classes
            </Link>
          </li>
        </ul>

        <article>
          <Heading className="small--white" heading="get in touch" />
          <ul className={styled.footer__contact}>
            <div className={styled["footer__contact--info"]}>
              <h3>Email</h3>
              <li>
                <p>ninebladesmuaythai@gmail.com</p>
              </li>

              <li>
                <p>Address</p>
                <p>14 Robinson Rd, #13-00, Far East Finance Building</p>
                <p>Singapore 048545</p>
              </li>
            </div>

            <div className={styled["footer__contact--info"]}>
              <h3>Phone</h3>
              <li>
                <p></p>
                <p>+65 8884 0135</p>
              </li>

            </div>
          </ul>
        </article>

        <div className={styled.footer__icons}>
          <Heading className="small--white" heading="social media" />
          <div className={styled["footer__icons--icons"]}>
            <a href="https://instagram.com/ninebladesmuaythaigym?igshid=YmMyMTA2M2Y=">
              <FaInstagramSquare size={35} color="var(--white)" />
            </a>
            <a href="https://m.facebook.com/ninebladesgym/">
            <FaFacebookSquare size={35} color="var(--white)" />
            </a>
            <a href="https://www.tiktok.com/@ninebladesgym?_t=8bbDc4m9FEg&_r=1">
            <FaTiktok size={35} color="var(--white)" />
            </a>
          </div>
        </div>
      </Container>

      {/* <ul className={styled.footer__logo}>
        <Heading className="small" heading="natura" />
        <li>
          <a
            target="_blank"
            href="https://github.com/m-oniqu3?tab=repositories"
            rel="noreferrer"
          >
            Designed & Developed by Monique
          </a>
        </li>
      </ul> */}
    </footer>
  );
};

export default Footer;
