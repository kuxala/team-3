import React from "react";
import styled from "styled-components";
import closeIcon from "../../public/assets/shared/mobile/icon-hamburger.svg"
export default function HeaderComponent() {
  return (
    <HeaderDiv>
      <Header>
        <HeaderTitle>Frontend Mentor</HeaderTitle>
        <HeaderText>Feedback Board</HeaderText>
      </Header>
      <img src={closeIcon} />
    </HeaderDiv>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div`
  padding: 24px;
  background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    );
   
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.p`
  color: white;
  font-size: 13px;
  font-weight: 500;
  line-height: 18.79px;
  text-align: left;
`;
const HeaderTitle = styled.h1`
  font-size: 15px;
  font-weight: 700;
  line-height: 21.68px;
  letter-spacing: -0.1875px;
  color: white;
`;
