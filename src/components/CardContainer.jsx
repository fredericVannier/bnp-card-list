import React from "react";
import CardItem from "./CardItem";
import styled from "styled-components";

const CardContainer = (items) => {
  const Grid = styled.div`
    display: grid;

    @media (min-width: 320px) {
      grid-template-columns: ${({ col }) => `repeat(1, 1fr)`};
    }
    @media (min-width: 641px) {
      grid-template-columns: ${({ col }) => `repeat(2, 1fr)`};
    }
    @media (min-width: 961px) {
      grid-template-columns: ${({ col }) => `repeat(2, 1fr)`};
    }
    @media (min-width: 1025px) {
      grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
    }
    @media (min-width: 1281px) {
      grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
    }
  `;

  return (
    <Grid col={3}>
      {items.map((item) => (
        <CardItem {...items} key={items.id} />
      ))}
    </Grid>
  );
};

export default CardContainer;
