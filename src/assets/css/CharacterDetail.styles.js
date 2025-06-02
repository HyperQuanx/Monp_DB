import styled from "styled-components";

export const CDTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
`;

export const CDTableCell = styled.td`
  padding: 16px;
  border: 1px solid #e9ecef;
  vertical-align: center;
  text-align: center;

  &.profile-image {
    background-color: #f0f0f0;
    color: #666;
    width: 120px;
    height: 120px;
  }

  &.label {
    background-color: #f8f9fa;
    font-weight: bold;
    color: #495057;
  }

  &.content {
    background-color: white;
    color: #1a1a1a;
  }

  &.wide-content {
    background-color: white;
    color: #1a1a1a;
    min-height: 80px;
  }
`;
