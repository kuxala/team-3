import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

export default function RoadmapPage() {
  const [isActive, setIsActive] = useState([false, true, false]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { data, upvoteStates, handleUpdate } = useContext(MyContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderItems = (status, borderColor) =>
    data.productRequests.map((item) => {
      if (item.status === status) {
        return (
          <StyledDiv
            key={item.id}
            style={{ borderTop: `5px solid ${borderColor}` }}
          >
            <p>
              {status === "planned"
                ? "Planned"
                : status === "in-progress"
                ? "In Progress"
                : "Live"}
            </p>
            <LinkToComponent to={`/suggestions/${item.id}`}>
              <h1 className="H1">{item.title}</h1>
              <span className="Span">{item.description}</span>
            </LinkToComponent>
            <Feature>{item.category}</Feature>
            <StyledBottom>
              <Upvotes
                style={{
                  backgroundColor: upvoteStates[item.id]
                    ? "#3A4374"
                    : "#f2f4fe",
                }}
                onClick={() => {
                  handleUpdate(item.id);
                }}
              >
                <img src="/assets/shared/icon-arrow-up.svg" alt="Upvote" />
                <p
                  style={{
                    color: upvoteStates[item.id] ? "#fff" : "black",
                  }}
                >
                  {" "}
                  {item.upvotes}
                </p>
              </Upvotes>
              <Comments>
                <img src="/assets/shared/icon-comments.svg" alt="Comments" />
                {item?.comments?.length}
              </Comments>
            </StyledBottom>
          </StyledDiv>
        );
      }
      return null;
    });

  return (
    <>
      <StyledContainer>
        <RodmapHeader>
          <div>
            <div>
              <img src="assets/shared/icon-arrow-left.svg" alt="Arrow" />
              <LinkTo to="/">Go Back</LinkTo>
            </div>
            <h3>Roadmap</h3>
          </div>
          <StyledLink to="/add-feedback">+ Add Feedback</StyledLink>
        </RodmapHeader>

        {screenWidth < 768 ? (
          <>
            <SmallHeader>
              <div
                style={{
                  borderBottom: isActive[0] ? "4px solid #F49F85" : "none",
                  opacity: isActive[0] ? "1" : "0.5",
                }}
                onClick={() => setIsActive([true, false, false])}
              >
                Planned (1)
              </div>
              <div
                style={{
                  borderBottom: isActive[1] ? "4px solid #AD1FEA" : "none",
                  opacity: isActive[1] ? "1" : "0.5",
                }}
                onClick={() => setIsActive([false, true, false])}
              >
                In-Progress (1)
              </div>
              <div
                style={{
                  borderBottom: isActive[2] ? "4px solid #62BCFA" : "none",
                  opacity: isActive[2] ? "1" : "0.5",
                }}
                onClick={() => setIsActive([false, false, true])}
              >
                Live (1)
              </div>
            </SmallHeader>
            {isActive.map((active, index) =>
              active
                ? renderItems(
                    ["planned", "in-progress", "live"][index],
                    ["#F49F85", "#AD1FEA", "#62BCFA"][index]
                  )
                : null
            )}
          </>
        ) : (
          <DesktopSmallHeader>
            <div>
              <p>Planned (1)</p>
              <span>Ideas prioritized for research</span>
              {renderItems("planned", "#F49F85")}
            </div>
            <div>
              <p>In Progress (1)</p>
              <span>Currently being developed</span>
              {renderItems("in-progress", "#AD1FEA")}
            </div>
            <div>
              <p>Live (1)</p>
              <span>Released features</span>
              {renderItems("live", "#62BCFA")}
            </div>
          </DesktopSmallHeader>
        )}
      </StyledContainer>
    </>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  min-height: 280px;
  background-color: #fff;
  border-radius: 10px;
  padding: 32px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .H1 {
    color: #3a4374;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    padding-bottom: 4px;
    text-decoration: none;
    &:hover {
      color: #4661e6;
    }
  }
  .Span {
    color: #647196;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  }
  & > p {
    color: #647196;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 8px;
  }
`;
const LinkToComponent = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;
const Feature = styled.div`
  margin-top: 16px;
  width: 35%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4661e6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const DesktopSmallHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 16px;
  & > div {
    width: 33%;
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    & > p {
      color: #3a4374;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.25px;
      padding-bottom: 4px;
    }
    & > span {
      color: #647196;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 10px;
`;

const Upvotes = styled.div`
  width: 69px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f4fe;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 14px;

  &:hover {
    background-color: #cfd7ff;
  }

  & > p {
    color: #3a4374;
    text-align: center;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;
  }
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledContainer = styled.div`
  @media only screen and (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 50px;
  }
`;

const RodmapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 24px;
  background: #373f68;

  @media only screen and (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 50px;
  }
  & > div > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & > div > h3 {
    padding-top: 4px;
    color: #fff;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  & > button {
    width: 140px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;
    outline: none;
    background: #ad1fea;
    color: #f2f4fe;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const StyledLink = styled(Link)`
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  background: #ad1fea;
  color: #f2f4fe;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;
const LinkTo = styled(Link)`
  color: #fff;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  &:hover {
    opacity: 0.9;
  }
`;

const SmallHeader = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  & > div {
    padding: 0 16px;
    height: 55px;
    display: flex;
    align-items: center;
    color: #3a4374;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;
  }
`;
