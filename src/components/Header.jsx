import React from "react";
import styled from "styled-components";
import closeIcon from "../../public/assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      <HeaderDiv>
        <Header>
          <HeaderTitle>Frontend Mentor</HeaderTitle>
          <HeaderText>Feedback Board</HeaderText>
        </Header>
        <img src={closeIcon} />
      </HeaderDiv>
      <DesktopHeaderDiv>
        <TopSection>
          <h3>Frontend Mentor</h3>
          <p>Feedback Board</p>
        </TopSection>
        <MiddleSection>
          <div>All</div>
          <div>Ui</div>
          <div>Ux</div>
        </MiddleSection>
        <BottomSection>
          <div className="top-row">
            <h3>Roadmap</h3>
            <Link>View</Link>
          </div>
          <div>
            <div className="bottom-row">
              <p>Planned</p>
              <span>0</span>
            </div>
            <div className="bottom-row">
              <p>In Progress</p>
              <span>0</span>
            </div>
            <div className="bottom-row">
              <p>Live</p>
              <span>0</span>
            </div>
          </div>
        </BottomSection>
      </DesktopHeaderDiv>
    </>
  );
}
const DesktopHeaderDiv = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const TopSection = styled.div`
  max-width: 255px;
  min-height: 137px;
  border-radius: 10px;
  padding: 1.5rem;
  padding-top: 4rem;
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  & > h3 {
    color: #fff;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  & > p {
    color: #fff;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.75;
  }
`;
const MiddleSection = styled.div`
  max-width: 255px;
  min-height: 166px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  gap: 8px;
  padding: 24px;
  & > div {
    width: 48px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #4661e6;
    color: #fff;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BottomSection = styled.div`
  max-width: 255px;
  min-height: 178px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  padding: 24px;
  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h3 {
      color: #3a4374;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.25px;
      padding-bottom: 4px;
    }
    & > a {
      color: #4661e6;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-decoration-line: underline;
    }
  }
  .bottom-row {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      color: #647196;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > span {
      color: #647196;
      text-align: right;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

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
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
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
