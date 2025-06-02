import React from "react";
import Header from "../common/Header";
import {
  Container,
  CategoryGrid,
  CategoryCard,
  FolderIcon,
  CategoryName,
  CategoryCount,
} from "../../assets/css/MainPage.styles";
import { Link } from "react-router-dom";

const MainPage = () => {
  const categories = [
    {
      id: 1,
      name: "캐릭터",
      icon: "👤",
      color: "#4285f4",
      count: 0,
      path: "/character-category",
    },
    {
      id: 2,
      name: "세계관",
      icon: "🌍",
      color: "#0f9d58",
      count: 0,
      path: "/world",
    },
    {
      id: 3,
      name: "플롯",
      icon: "📚",
      color: "#ea4335",
      count: 0,
      path: "/plot",
    },
    {
      id: 4,
      name: "설정집",
      icon: "⚙️",
      color: "#ff6d01",
      count: 0,
      path: "/setting",
    },
    {
      id: 5,
      name: "아이디어",
      icon: "💡",
      color: "#9c27b0",
      count: 0,
      path: "/idea",
    },
    {
      id: 6,
      name: "메모",
      icon: "📝",
      color: "#607d8b",
      count: 0,
      path: "/memo",
    },
  ];

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
    </Container>
  );
};

export default MainPage;
