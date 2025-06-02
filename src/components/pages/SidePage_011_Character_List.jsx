import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../common/Header";
import {
  Container,
  TopSection,
  PageTitle,
  CreateButton,
  ListContainer,
  Table,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  EmptyState,
  Pagination,
  PageButton,
  BackButton,
} from "../../assets/css/CharacterList.styles";

const SidePage_011_Character_List = () => {
  const navigate = useNavigate();
  const { regionId } = useParams();

  // 지역별 이름 매핑
  const regionNames = {
    "00": "전체",
    "01": "동부평야지대",
    "02": "남동하천지대",
    "03": "서부마교",
    "04": "귀주도",
    "05": "북부산악지대",
  };

  // 지역별 임시 데이터 (추후 API 연동)
  const regionCharacters = {
    "01": [
      {
        id: 1,
        name: "동부의 김철수",
        age: 25,
        gender: "남",
        job: "농부",
        region: "동부평야지대",
        createdAt: "2024-01-15",
      },
      {
        id: 2,
        name: "평야의 이영희",
        age: 23,
        gender: "여",
        job: "상인",
        region: "동부평야지대",
        createdAt: "2024-01-14",
      },
    ],
    "02": [
      {
        id: 3,
        name: "하천의 박민수",
        age: 30,
        gender: "남",
        job: "어부",
        region: "남동하천지대",
        createdAt: "2024-01-13",
      },
    ],
    "03": [
      {
        id: 4,
        name: "마교도 최강수",
        age: 35,
        gender: "남",
        job: "마교도",
        region: "서부마교",
        createdAt: "2024-01-12",
      },
      {
        id: 5,
        name: "서부의 정미영",
        age: 28,
        gender: "여",
        job: "암살자",
        region: "서부마교",
        createdAt: "2024-01-11",
      },
    ],
    "04": [
      {
        id: 6,
        name: "귀주의 한석진",
        age: 40,
        gender: "남",
        job: "선장",
        region: "귀주도",
        createdAt: "2024-01-10",
      },
    ],
    "05": [
      {
        id: 7,
        name: "산악의 김산",
        age: 32,
        gender: "남",
        job: "사냥꾼",
        region: "북부산악지대",
        createdAt: "2024-01-09",
      },
      {
        id: 8,
        name: "북부의 설원",
        age: 26,
        gender: "여",
        job: "약초꾼",
        region: "북부산악지대",
        createdAt: "2024-01-08",
      },
    ],
  };

  // 전체 또는 특정 지역 캐릭터 가져오기
  const getCharacters = () => {
    if (regionId === "00") {
      // 전체: 모든 지역의 캐릭터를 합침
      return Object.values(regionCharacters).flat();
    }
    return regionCharacters[regionId] || [];
  };

  const characters = getCharacters();
  const regionName = regionNames[regionId] || "알 수 없는 지역";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 페이지네이션 계산
  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCharacters = characters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCreateClick = () => {
    console.log(`${regionName} 캐릭터 생성 페이지로 이동`);
    // navigate(`/character/create/${regionId}`);
  };

  const handleCharacterClick = (character) => {
    console.log("캐릭터 상세 페이지로 이동:", character.name);
    // navigate(`/character/${character.id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Header />

      <TopSection>
        <PageTitle>{regionName} 등장인물</PageTitle>
        <CreateButton onClick={handleCreateClick}>
          + 새 캐릭터 생성
        </CreateButton>
      </TopSection>

      <ListContainer>
        {characters.length === 0 ? (
          <EmptyState>
            <div className="icon">👤</div>
            <div className="message">등록된 캐릭터가 없습니다.</div>
            <div className="sub-message">새 캐릭터를 생성해보세요.</div>
          </EmptyState>
        ) : (
          <Table>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>이름</TableHeaderCell>
                <TableHeaderCell>나이</TableHeaderCell>
                <TableHeaderCell>성별</TableHeaderCell>
                <TableHeaderCell>직업</TableHeaderCell>
                {regionId === "00" && <TableHeaderCell>지역</TableHeaderCell>}
                <TableHeaderCell>생성일</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {currentCharacters.map((character) => (
                <TableRow
                  key={character.id}
                  onClick={() => handleCharacterClick(character)}
                >
                  <TableCell>{character.name}</TableCell>
                  <TableCell>{character.age}세</TableCell>
                  <TableCell>{character.gender}</TableCell>
                  <TableCell>{character.job}</TableCell>
                  {regionId === "00" && (
                    <TableCell>{character.region}</TableCell>
                  )}
                  <TableCell>{character.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </ListContainer>

      {characters.length > 0 && totalPages > 1 && (
        <Pagination>
          <PageButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </PageButton>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PageButton
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PageButton>
          ))}

          <PageButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </PageButton>
        </Pagination>
      )}

      <BackButton onClick={handleBackClick}>← 뒤로가기</BackButton>
    </Container>
  );
};

export default SidePage_011_Character_List;
