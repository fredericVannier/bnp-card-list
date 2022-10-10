import React, { useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  padding-left: 5%;
  padding-right: 5%;

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

const Home = (props) => {
  const { users } = props;
  const [query, setQuery] = useState("");

  return (
    <HomeContainer>
      <input
        type="text"
        placeholder="Search for people..."
        onChange={(e) => {
          e.preventDefault();
          setQuery(e.target.value.toLowerCase());
        }}
      />

      <Grid col={3}>
        {users
          .filter((user) => user.name.toLowerCase().includes(query))
          .map((item) => (
            <div key={item.id}>
              <CardItem {...item} />
            </div>
          ))}
      </Grid>
    </HomeContainer>
  );
};

export default Home;
