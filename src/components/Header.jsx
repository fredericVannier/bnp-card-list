import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  background-image: linear-gradient(90deg, #2491ee, #1cc7f2);
  height: 110px;
  box-shadow: 0px 13px 55px -18px rgba(77, 77, 77, 0.66);
  border-radius: 0px 0px 10px 10px;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 450px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const HeadTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: bolder;
  line-height: 50px;
`;

const Header = () => {
  return (
    <HeaderContainer className="headerContainer">
      <HeadTitle>BNP PARIBAS</HeadTitle>
      <ListContainer>
        <p>Particuliers</p>
        <p>Professionnels</p>
        <p>Banque Privée</p>
        <p>Entreprises</p>
      </ListContainer>
    </HeaderContainer>
  );
};

export default Header;
