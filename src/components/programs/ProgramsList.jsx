import React from "react";
import styled from "./ProgramsList.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import { qualities } from "./qualities";
import Item from "../helpers/item/Item";

const ProgramsList = () => {
  const programs = qualities.map((quality) => {
    return (
      <Item key={quality.id} item={quality} className="program" theme="light" />
    );
  });

  return (
    <section className={styled.programs} id="journey">
      <Container>
        <article className={styled.programs__content}>
          <Heading className="medium" heading="The Journey" />
          <p className="text">
            
          </p>
        </article>

        <div className={styled.programs__list}>{programs}</div>
      </Container>
    </section>
  );
};

export default ProgramsList;
