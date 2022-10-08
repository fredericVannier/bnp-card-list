import React from "react";
import styled from "styled-components";

const CardItem = (items) => {
  console.log('kdfjdskljfhdsklajf alskjd lskjdflkj', items)
  const { address, company, email, id, name, phone, username, website } = items;

  const Image = styled.div`
    width: 38%;
    height: 100%;
    //background-image: url('./testreact.jpg');
    background-color: lightgrey;
    border-radius: 10px 0px 0px 10px;
  `;

  const CardItemContainer = styled.div`
    display: flex;
    margin: 10px;
    border-radius: 10px;
    height: 130px;
    background-color: white;
    max-width: 320px;
  `;

    const Name = styled.div`
        color: #4e4d4d;
        font-weight: 600;
        margin-left: 5px;
        font-size: 18px;
        font-weight: 800;
    `;
  
    const UserInfo = styled.div`
        color: lightgrey;
        font-weight: 400;
        margin-left: 5px;
    `;

  return (
    <CardItemContainer className="cardItemContainer">
      <Image className="pictureContainer"></Image>

      <section className="textSection">
        <Name>{name}</Name>
        <UserInfo>{phone}</UserInfo>
        <UserInfo>{website}</UserInfo>
      </section>
    </CardItemContainer>
  );
};

export default CardItem;
