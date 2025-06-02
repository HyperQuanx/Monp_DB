import React from "react";
import {
  HeaderContainer,
  Title,
  Subtitle,
} from "../../assets/css/Header.styles";

const formatTextWithBoldCapitals = (text) => {
  return text.split("").map((char, index) => {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return <strong key={index}>{char}</strong>;
    }
    return char;
  });
};

const Header = () => {
  return (
    <HeaderContainer>
      <Title to="/">MONP</Title>
      <Subtitle>{formatTextWithBoldCapitals("My Own Novel Project")}</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
