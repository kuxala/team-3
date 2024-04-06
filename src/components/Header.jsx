import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
export default function HeaderComponent() {
  const { data, setData, selectedCategory, setSelectedCategory, counts } =
    useContext(MyContext);
  const [menu, setMenu] = useState(false);
  const labels = ["All", "UX", "UI", "Enhancement", "Bug", "Feature"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIdClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index); // Set active only if it's not already active
    }
  };

  const handleItemClick = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  return (
    <>
      <HeaderDiv>
        <Header>
          <HeaderTitle>Frontend Mentor</HeaderTitle>
          <HeaderText>Feedback Board</HeaderText>
        </Header>
        {menu ? (
          <img
            src="/assets/shared/mobile/icon-close.svg"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <img
            src="/assets/shared/mobile/icon-hamburger.svg"
            onClick={() => setMenu(!menu)}
          />
        )}
        {menu ? (
          <MenuDiv>
            <MiddleSection>
              {labels.map((label, index) => (
                <div
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => {
                    handleIdClick(index);
                    handleItemClick(label);
                    setMenu(false);
                  }}
                >
                  {label}
                </div>
              ))}
            </MiddleSection>
            <BottomSection>
              <div className="top-row">
                <h3>Roadmap</h3>
                <Link to="/roadmap">View</Link>
              </div>
              <div>
                <div className="bottom-row">
                  <p>Planned</p>
                  <span>{counts["planned"]}</span>
                </div>
                <div className="bottom-row">
                  <p>In Progress</p>
                  <span>{counts["in-progress"]}</span>
                </div>
                <div className="bottom-row">
                  <p>Live</p>
                  <span>{counts["live"]}</span>
                </div>
              </div>
            </BottomSection>
          </MenuDiv>
        ) : null}
      </HeaderDiv>

      <DesktopHeaderDiv>
        <TopSection>
          <h3>Frontend Mentor</h3>
          <p>Feedback Board</p>
        </TopSection>
        <MiddleSection>
          {labels.map((label, index) => (
            <div
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => {
                handleIdClick(index);
                handleItemClick(label);
              }}
            >
              {label}
            </div>
          ))}
        </MiddleSection>
        <BottomSection>
          <div className="top-row">
            <h3>Roadmap</h3>
            <Link to="/roadmap">View</Link>
          </div>
          <div>
            <div className="bottom-row">
              <p>Planned</p>
              <span>{counts["planned"]}</span>
            </div>
            <div className="bottom-row">
              <p>In Progress</p>
              <span>{counts["in-progress"]}</span>
            </div>
            <div className="bottom-row">
              <p>Live</p>
              <span>{counts["live"]}</span>
            </div>
          </div>
        </BottomSection>
      </DesktopHeaderDiv>
    </>
  );
}

const MenuDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* left: 90%; */
  top: 10.4%;
  right: 0;
  padding: 0;
  padding: 32px;
  margin: 0;
  width: 70%;
  height: 100vh;
  background-color: #f7f8fd;
`;

const DesktopHeaderDiv = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1068px) {
    width: 725px;
    padding-bottom: 50px;
    margin: 0 auto;
    flex-direction: row;
  }
`;

const TopSection = styled.div`
  max-width: 255px;
  min-height: 137px;
  border-radius: 10px;
  padding: 1.5rem;
  padding-top: 4rem;
  @media screen and (min-width: 768px) and (max-width: 1068px) {
    width: 33%;
  }
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
  flex-wrap: wrap;
  @media screen and (min-width: 768px) and (max-width: 1068px) {
    width: 33%;
  }
  .active {
    background-color: #4661e6; /* Change to the desired color for active items */
    color: #ffffff; /* Change to the desired text color for active items */
  }
  & > div {
    min-width: 48px;
    height: 30px;
    flex-shrink: 0;
    padding: 0 16px;
    border-radius: 10px;
    background: #f2f4ff;
    color: #4661e6;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #cfd7ff;
    }
  }
`;

const BottomSection = styled.div`
  max-width: 255px;
  min-height: 178px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  padding: 24px;
  @media screen and (min-width: 768px) and (max-width: 1068px) {
    width: 33%;
  }
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
