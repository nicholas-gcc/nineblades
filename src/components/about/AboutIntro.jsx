import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
      The <span>Journey</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <h2 className="text">
            <b><u>Skill</u></b>
          </h2>
          <p className="text">
            Develop real skils with our experienced and dedicated trainers
          </p>
          <h2 className="text">
            <b><u>Fitness</u></b>
          </h2>
          <p className="text">
            Get into the best shape of your lifr
          </p>
          <h2 className="text">
            <b><u>Skill</u></b>
          </h2>
          <p className="text">
            Develop real skils with our experienced and dedicated trainers
          </p>
          <Button link="#membership" className="primary">
            Join Us Today
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
