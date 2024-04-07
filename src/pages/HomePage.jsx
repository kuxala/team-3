import React from "react";
import styled from "styled-components";
import SuggestionHeader from "../components/SuggestionHeader";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/Header";
export default function HomePage() {
  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <SuggestionHeader />

      <StyledDiv>
        <img src="/assets/suggestions/illustration-empty.svg" />
        <h1>There is no feedBack yet.</h1>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <StyledLink to="/add-feedback">+ Add Feedback</StyledLink>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  margin: 30px 24px;
  margin-top: 100px;
  background-color: #fff;
  padding: 76px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    width: 825px;
    margin: 0 auto;
    margin-top: 30px;
  }

  & > h1 {
    padding-top: 40px;
    padding-bottom: 40px;
    color: #3a4374;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  & > p {
    color: #647196;
    text-align: center;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > button {
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 24px;
  width: 134px;
  height: 40px;
  flex-shrink: 0;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #ad1fea;
  color: #f2f4fe;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
  &:hover {
    background-color: #c75af6;
  }
`;
