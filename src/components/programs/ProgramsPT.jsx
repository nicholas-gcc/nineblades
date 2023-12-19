import React from "react";
import styled from "./ProgramsPT.module.css";
import Container from "../helpers/wrapper/Container";
import muayThaiKnee from "../../assets/muay_thai_knee.png";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
      <span>personalized</span> training
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          <h2 className="text">
            1 to 1 Muay Thai personal training in CBD.
          </h2>

          <h2 className="text">
            Get fit and lean fast. Learn and get fit faster.
          </h2>

          <h2 className="text">
            Flexible timings at your convenience.
          </h2>
          <Button className="primary" link="https://www.instagram.com/p/CpbsxpIvG-v/?igshid=YmMyMTA2M2Y=">
            View Rates
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={muayThaiKnee} alt="" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;