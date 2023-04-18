import React from "react";
import styled from "./Facilities.module.css";
import boxing from "../../assets/9b-website-vid-2.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";

const Facilities = () => {
  const heading = (
    <>
      We raise <span>warriors</span>
    </>
  );

  return (
    <section className={styled.facility} id="facilities">
      <video src={boxing} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <h2 className="text">
              Transform your life through the journey of Muay Thai
            </h2>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
