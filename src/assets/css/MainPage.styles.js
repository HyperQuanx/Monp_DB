import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

export const CategoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    border-color: #4285f4;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const FolderIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: ${(props) => props.color || "#4285f4"};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

export const CategoryName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CategoryCount = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin: 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  margin-top: 30px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;
