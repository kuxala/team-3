import React from "react";
import styled from "styled-components";

export default function AddComment() {
  return (
    <>
      <StyledContainer>
        <h3>Add Comment</h3>
        <textarea
          placeholder="Type your comment here"
          maxLength={250}
        ></textarea>
        <div>
          <p>Max Characters 250</p>
          <button>Post Comment</button>
        </div>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  min-height: 234px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;

  @media only screen and (min-width: 768px) {
    width: 825px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  & > h3 {
    color: #3a4374;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  & > textarea {
    max-width: 100%;
    min-height: 100px;
    border-radius: 5px;
    background: #f7f8fd;
    border: 1px solid #f7f8fd;
    outline: none;
    padding: 1rem;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      color: #647196;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > button {
      width: 119px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #ad1fea;
      border: 0px;
      color: #f2f4fe;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
    }
  }
`;
