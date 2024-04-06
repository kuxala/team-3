import styled from "styled-components";
import React, { useContext, useState, useMemo } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

export default function SuggestionCard() {
  const {
    data,
    upvoteStates,
    handleUpdate,
    dropdownMenuValue,
    selectedCategory,
  } = useContext(MyContext);

  const sortedData = useMemo(() => {
    const items = [...data.productRequests];
    switch (dropdownMenuValue) {
      case "Most-Upvotes":
        items.sort((a, b) => b.upvotes - a.upvotes);
        break;
      case "Least-Upvotes":
        items.sort((a, b) => a.upvotes - b.upvotes);
        break;
      case "Most-Comments":
        items.sort(
          (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0)
        );
        break;
      case "Least-Comments":
        items.sort(
          (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0)
        );
        break;
      default:
        break;
    }
    return items;
  }, [data.productRequests, dropdownMenuValue]);

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") {
      return sortedData;
    } else {
      return sortedData.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  }, [sortedData, selectedCategory]);

  return (
    <>
      {filteredData.map((item) => {
        return (
          <StyledDiv key={item.id}>
            <UpvotesDesktop
              style={{
                backgroundColor: upvoteStates[item.id] ? "#4661E6" : "#f2f4fe",
              }}
              onClick={() => {
                handleUpdate(item.id);
              }}
            >
              {upvoteStates[item.id] ? (
                <img src="/assets/shared/icon-arrow-up-white.svg" />
              ) : (
                <img src="/assets/shared/icon-arrow-up.svg" />
              )}
              {/* <img src="/assets/shared/icon-arrow-up.svg" /> */}
              <p
                style={{
                  color: upvoteStates[item.id] ? "#fff" : "black",
                }}
              >
                {item.upvotes}
              </p>
            </UpvotesDesktop>

            <CenterDiv>
              <StyledTexts to={`/suggestions/${item.id}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </StyledTexts>
              <StyledCategory>{item.category}</StyledCategory>
              <StyledBottom>
                <Upvotes
                  style={{
                    backgroundColor: upvoteStates[item.id]
                      ? "#4661E6"
                      : "#f2f4fe",
                  }}
                  onClick={() => {
                    handleUpdate(item.id);
                  }}
                >
                  {upvoteStates[item.id] ? (
                    <img src="/assets/shared/icon-arrow-up-white.svg" />
                  ) : (
                    <img src="/assets/shared/icon-arrow-up.svg" />
                  )}
                  <p
                    style={{
                      color: upvoteStates[item.id] ? "#fff" : "black",
                    }}
                  >
                    {item.upvotes}
                  </p>
                </Upvotes>
                <Comments>
                  <img src="/assets/shared/icon-comments.svg" />
                  {item?.comments?.length}
                </Comments>
              </StyledBottom>
            </CenterDiv>
            <CommentsDesktop>
              <img src="/assets/shared/icon-comments.svg" />
              {item?.comments?.length}
            </CommentsDesktop>
          </StyledDiv>
        );
      })}
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin: 24px;
  background-color: #fff;
  padding: 24px;
  border-radius: 10px;
  text-decoration: none;
  @media only screen and (min-width: 768px) {
    max-width: 825px;
    margin: 0 auto;
    margin-top: 24px;
    height: 0;
    min-height: 151px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) and (max-width: 1068px) {
    width: 725px;
    padding-bottom: 50px;
    margin: 0 auto;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

const CenterDiv = styled.div`
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;
const StyledTexts = styled(Link)`
  text-decoration: none;
  &:hover {
    & > h3 {
      color: #4661e6;
    }
  }
  & > h3 {
    color: #3a4374;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;

    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  & > p {
    padding: 9px 0;
    color: #647196;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 111px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f4ff;
  color: #4661e6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 10px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Upvotes = styled.div`
  min-width: 69px;
  height: 32px;
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
const UpvotesDesktop = styled.div`
  width: 40px;
  min-height: 53px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f4fe;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const CommentsDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
