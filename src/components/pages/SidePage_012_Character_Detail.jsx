import React from "react";
import { Container } from "../../assets/css/MainPage.styles";
import Header from "../common/Header";
import { PageTitle, TopSection } from "../../assets/css/CharacterList.styles";
import { CDTable, CDTableCell } from "../../assets/css/CharacterDetail.styles";

const SidePage_012_Character_Detail = () => {
  return (
    <Container>
      <Header />

      <TopSection>
        <PageTitle>캐릭터 상세 정보</PageTitle>
      </TopSection>

      <div>
        <CDTable>
          <tbody>
            <tr>
              <CDTableCell rowSpan={3} className="profile-image">
                프로필이미지영역
              </CDTableCell>
              <CDTableCell className="label">이름</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
              <CDTableCell className="label">성별</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">생년월일</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
              <CDTableCell className="label">나이</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">신체</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
              <CDTableCell className="label">직업</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">출생지</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
              <CDTableCell className="label">별명</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
              <CDTableCell className="label">성향</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">소속</CDTableCell>
              <CDTableCell colSpan={2} className="content"></CDTableCell>
              <CDTableCell className="label">파벌</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">좋아하는 것</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
              <CDTableCell rowSpan={2} className="label">
                사용무공
              </CDTableCell>
              <CDTableCell rowSpan={2} className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">싫어하는 것</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">성격</CDTableCell>
              <CDTableCell colSpan={4} className="wide-content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">외형</CDTableCell>
              <CDTableCell colSpan={4} className="wide-content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">특이사항</CDTableCell>
              <CDTableCell colSpan={4} className="wide-content"></CDTableCell>
            </tr>
            <tr>
              <CDTableCell className="label">테마곡</CDTableCell>
              <CDTableCell colSpan={2} className="content"></CDTableCell>
              <CDTableCell className="label">만든 날</CDTableCell>
              <CDTableCell className="content"></CDTableCell>
            </tr>
          </tbody>
        </CDTable>
      </div>
    </Container>
  );
};

export default SidePage_012_Character_Detail;
