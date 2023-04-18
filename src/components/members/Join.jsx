import React from "react";
import styled from "./Join.module.css";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import exercise from "../../assets/exercise.png";
import facilitiesImage from "../../assets/facilities_img.png";

const Join = () => {
  const heading = (
    <>
      where to find us
    </>
  );

  return (
    <Container>
      <section className={styled.join} id="membership">
        <div>
          <article className={styled.join__content}>
            <Heading className="medium--dark" heading={heading} />
            <p className="text--dark">
              Nine Blades Muay Thai<br></br>
              14 Robinson Road, Far East Finance Building #13-00
              <br></br>
              Singapore 048545
            </p>
            
            <p className="text--dark">
            2 min walk from Raffles Place MRT, Exit F
            Walk past the 7/11, look for a brown marbled entrance with glass doors.
            Far East Finance Building is located beside Level Gym @ Robinson Road
            </p>
          </article>

          <form>
            <input type="text" placeholder="Enter your email" />
            <Button className="neutral">Join Us</Button>
          </form>
        </div>

        <figure className={styled.join__image}>
          <img src={facilitiesImage} alt="Woman in the gym exercising" />
        </figure>
      </section>
    </Container>
  );
};

export default Join;
