import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Title = styled(Link)`
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  margin-bottom: 8px;
  cursor: pointer;
  text-decoration: none;
  display: block;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;

  strong {
    color: #1a1a1a;
    font-weight: 700;
  }
`;
