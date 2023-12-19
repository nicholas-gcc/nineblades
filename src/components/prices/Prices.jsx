import React from "react";
import styled from "./Prices.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Item from "../helpers/item/Item";
import { gymRates } from "./gymRates";

const Prices = () => {
  const rates = gymRates.map((rate) => {
    return <Item key={rate.id} item={rate} className="prices" />;
  });

  return (
    <section className={styled.prices} id="prices">
      <Container>
        <article className={styled.prices__content}>
          <Heading className="medium--dark" heading="training rates" />
          <p className="text--dark">
          Unlimited membership - Full Access
          </p>
          <p className="text--dark">
          5 class bundles
          </p>
        </article>

        <div className={styled.prices__list}>{rates}</div>
      </Container>
    </section>
  );
};

export default Prices;