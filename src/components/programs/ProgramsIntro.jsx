import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/muay_thai_knee.png";
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
            Get fit and lean fast. Accelerate your progess.
          </h2>

          <h2 className="text">
            Flexible timings at your convenience.
          </h2>
          <Button className="primary" link="https://www.instagram.com/p/CpbsxpIvG-v/?igshid=YmMyMTA2M2Y=">
            View Rates
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;