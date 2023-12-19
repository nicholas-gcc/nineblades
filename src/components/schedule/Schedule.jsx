import React from "react";
import styled from "./Schedule.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Item from "../helpers/item/Item";
import { schedules } from "./schedules";

const Schedule = () => {
  const schedulesItem = schedules.map((item) => {
    return <Item key={item.id} item={item} className="schedule" />;
  });

  return (
    <section className={styled.schedules} id="schedule">
      <Container>
        <article className={styled.schedules__content}>
          <Heading className="medium--dark" heading="our class schedule" />
          <p className="text--dark">
          Book your first class on calendly.

          </p>
        </article>

        <div className={styled.schedules__list}>{schedulesItem}</div>
      </Container>
    </section>
  );
};

export default Schedule;
