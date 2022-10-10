import React from "react";
import styled from "styled-components";
import { FcBriefcase, FcPhoneAndroid, FcReddit } from "react-icons/fc";
import { IconContext } from "react-icons";
import AddButton from "./AddButton";

const CardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  border-radius: 5px;
  height: 150px;
  background-color: white;
  width: 340px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
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
  background-image: url(${(props) => props.url});
  background-position: center;
  width: 38%;
  height: 100%;
  border-radius: 3px 0px 0px 3px;
`;

const IconContainer = styled.div`
  margin-right: 5px;
`;

const CardItem = (props) => {
  const { company, name, phone, website, image } = props;

  return (
    <IconContext.Provider value={{ size: "16px" }}>
      <CardItemContainer className="cardItemContainer">
        <Image url={image.urls.small} />

        <TextSection className="textSection">
          <Name>{name}</Name>

          <UserInfo>
            <IconContainer>
              <FcBriefcase />
            </IconContainer>
            {company.name}
          </UserInfo>

          <UserInfo className="phoneRule">
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

        <AddButton />
      </CardItemContainer>
    </IconContext.Provider>
  );
};

export default CardItem;
