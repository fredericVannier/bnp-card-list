import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  font-weight: 600;
  background-image: linear-gradient(45deg, #007265, #00915a);
  border: none;
  border-radius: 3px;
  padding: 3px 15px;
  position: absolute;
  top: 110px;
  left: 265px;
`;

const AddButton = () => {
  return <Button>add</Button>;
};

export default AddButton;
