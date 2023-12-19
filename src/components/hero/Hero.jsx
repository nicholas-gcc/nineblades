import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      <span>pure</span> muay thai gym
    </>
  );

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <h2 className="text">
            Experience Muay Thai Singapore in the CBD
            </h2>

            <Button className="primary" link="https://calendly.com/ninebladesmuaythai?fbclid=PAAaaUtt7Oh19lnkbK84fMX7V8tW-8_e6XQEo3_MlyILb99MNVZyCWNmDosSM">
              Book Your First Class
            </Button>

          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
