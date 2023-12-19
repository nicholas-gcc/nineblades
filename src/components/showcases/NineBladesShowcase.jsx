import React from "react";
import styled from "./NineBladesShowcase.module.css";
import boxing from "../../assets/9b-website-vid-2.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";

const NineBladesShowcase = () => {
  const heading = (
    <>
      We raise <span>warriors</span>
    </>
  );

  return (
    <section className={styled.showcase} id="showcases">
      <video src={boxing} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.showcase__overlay}>
        <Container>
          <article className={styled.showcase__content}>
            <Heading className="medium" heading={heading} />
            <h2 className="text">
              Transform your life through Muay Thai
            </h2>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default NineBladesShowcase;
