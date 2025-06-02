import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const CreateButton = styled.button`
  padding: 10px 20px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #3367d6;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background: #f8f9fa;
`;

export const TableHeaderRow = styled.tr`
  border-bottom: 1px solid #e9ecef;
`;

export const TableHeaderCell = styled.th`
  padding: 16px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #495057;

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 12px;

    &:nth-child(4),
    &:nth-child(5) {
      display: none; /* 모바일에서 일부 컬럼 숨김 */
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f1f3f4;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 16px 12px;
  font-size: 14px;
  color: #1a1a1a;

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 13px;

    &:nth-child(4),
    &:nth-child(5) {
      display: none; /* 모바일에서 일부 컬럼 숨김 */
    }
  }
`;

export const EmptyState = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #666;

  .icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  .message {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .sub-message {
    font-size: 14px;
    color: #999;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  background: ${(props) => (props.active ? "#4285f4" : "white")};
  color: ${(props) => (props.active ? "white" : "#666")};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(props) => (props.active ? "#3367d6" : "#f8f9fa")};
    border-color: #4285f4;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    border-color: #4285f4;
    color: #4285f4;
  }

  &:active {
    transform: translateY(1px);
  }
`;
