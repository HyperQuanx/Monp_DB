import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CategoryCard,
  CategoryCount,
  CategoryGrid,
  CategoryName,
  Container,
  FolderIcon,
  BackButton,
} from "../../assets/css/MainPage.styles";
import Header from "../common/Header";

const SidePage_01_Character = () => {
  const navigate = useNavigate();

  const categories = [
    // 임시 데이터 (추후 API 연동)
    {
      id: 0,
      name: "전체",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-list/00",
    },
    {
      id: 1,
      name: "동부평야지대",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-list/01",
    },
    {
      id: 2,
      name: "남동하천지대",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-list/02",
    },
    {
      id: 3,
      name: "서부마교",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-list/03",
    },
    {
      id: 4,
      name: "귀주도",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-list/04",
    },
    {
      id: 5,
      name: "북부산악지대",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-list/05",
    },
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header />

      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard as={Link} to={category.path} key={category.id}>
            <FolderIcon color={category.color}>{category.icon}</FolderIcon>
            <CategoryName>{category.name}</CategoryName>
            <CategoryCount>{category.count}개</CategoryCount>
          </CategoryCard>
        ))}
      </CategoryGrid>

      <BackButton onClick={handleBackClick}>← 뒤로가기</BackButton>
    </Container>
  );
};

export default SidePage_01_Character;
