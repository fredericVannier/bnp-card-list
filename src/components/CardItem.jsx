import React from "react";
import styled from "styled-components";
import { FcBriefcase, FcPhoneAndroid, FcReddit } from "react-icons/fc";
import { IconContext } from "react-icons";

const CardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  border-radius: 5px;
  height: 150px;
  background-color: white;
  width: 340px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const TextSection = styled.div`
  width: 200px;
`;

const Name = styled.div`
  color: #202020;
  font-weight: 600;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0px 10px 15px;
`;

const UserInfo = styled.div`
  display: flex;
  color: lightgrey;
  font-size: 13px;
  font-weight: 400;
  margin-left: 15px;
`;

const Image = styled.div`
  background-image: url("https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=");
  background-size: cover;
  background-position: center;
  width: 38%;
  height: 100%;
  border-radius: 3px 0px 0px 3px;
`;

const IconContainer = styled.div`
  margin-right: 5px;
`;

const CardItem = (props) => {
  const { company, name, phone, website } = props;

  return (
    <IconContext.Provider value={{ color: "#219afa", size: "16px" }}>
      <CardItemContainer className="cardItemContainer">
        <Image />

        <TextSection className="textSection">
          <Name>{name}</Name>

          <UserInfo>
            <IconContainer>
              <FcBriefcase />
            </IconContainer>
            {company.name}
          </UserInfo>

          <UserInfo>
            <IconContainer>
              <FcPhoneAndroid />
            </IconContainer>
            {phone}
          </UserInfo>

          <UserInfo>
            <IconContainer>
              <FcReddit />
            </IconContainer>
            {website}
          </UserInfo>
        </TextSection>
      </CardItemContainer>
    </IconContext.Provider>
  );
};

export default CardItem;
