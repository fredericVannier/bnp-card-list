import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Grid = styled.div`
display: grid;
padding: 10%;

@media (min-width: 320px) {
  grid-template-columns: ${({ col }) =>
    `repeat(1, 1fr)`}; /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 641px) {
  grid-template-columns: ${({ col }) =>
    `repeat(2, 1fr)`}; /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
  grid-template-columns: ${({ col }) =>
    `repeat(2, 1fr)`}; /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  grid-template-columns: ${({ col }) =>
    `repeat(${col}, 1fr)`}; /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  grid-template-columns: ${({ col }) =>
    `repeat(${col}, 1fr)`}; /* hi-res laptops and desktops */
}
`;

const Home = (props) => {
  const [query, setQuery] = useState("");
  console.log('props home 2', props.text)

  return (
    <HomeContainer>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          e.preventDefault();
          setQuery(e.target.value);
        }}
      />
      <Grid col={3}>
        {props.text
          .filter((user) => user.name.toLowerCase().includes(query))
          .map((item, index) => (
            <CardItem {...item} key={index} />
          ))}
      </Grid>
    </HomeContainer>
  );
};

export default Home;
