import React from "react";
import styled from "styled-components";
import SortCard from "./SortCard";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SuggestionHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownMenuValue, setDropdownMenuValue] = useState("Most Upvotes");
  // console.log(dropdownMenuValue)

  return (
    <>
      <SuggestionHeaderDiv>
        <div>
          <StyledDesktopText>
            <img src="/assets/suggestions/icon-suggestions.svg" />
            <p>6 suggestions</p> {/* ეს შესააცვლელია */}
          </StyledDesktopText>
          <SortCard
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            dropdownMenuValue={dropdownMenuValue}
            setDropdownMenuValue={setDropdownMenuValue}
          />

          <StyledSort>
            <p>Sort By: </p>
            <span>{dropdownMenuValue.replace("-", " ")}</span>{" "}
            {/*sorting  here*/}
            <img
              src="/assets/shared/icon-arrow-down.svg"
              onClick={() => setIsOpen(!isOpen)}
            />
          </StyledSort>
        </div>
        <StyledLink to="/add-feedback">+ Add Feedback</StyledLink>
      </SuggestionHeaderDiv>
    </>
  );
}
const StyledDesktopText = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: unset;
    display: flex;
    align-items: center;
    gap: 16px;
    & > p {
      color: #fff;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.25px;
      margin-right: 40px;
    }
  }
`;
const StyledLink = styled(Link)`
  width: 119px;
  height: 40px;
  flex-shrink: 0;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  background: #4661e6;
  color: #f2f4fe;
  font-family: Jost;
  font-size: 13px;
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

const StyledSort = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & > p {
    color: #f2f4fe;
    text-align: right;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > span {
    color: #f2f4fe;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const SuggestionHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background: #373f68;
  @media only screen and (min-width: 768px) {
    width: 50%;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 100px;
  }

  & > div {
    display: flex;
    gap: 5px;
    align-items: center;

    & > p {
      color: #f2f4fe;
      text-align: right;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > span {
      color: #f2f4fe;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  & > button {
    width: 134px;
    height: 40px;
    flex-shrink: 0;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #ad1fea;
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
  }
`;
