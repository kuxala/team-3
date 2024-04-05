import styled from "styled-components";
import React, { useContext } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
export default function SuggestionCard() {
  const { data, setData } = useContext(MyContext);
  // to={`/suggestions/${item.id}`}

  return (
    <>
      {data.productRequests.map((item) => {
        return (
          <StyledDiv key={item.id} to={`/suggestions/${item.id}`}>
            {/* <Link to={`/suggestions/${item.id}`}>here</Link> */}
            <UpvotesDesktop>
              <img src="/assets/shared/icon-arrow-up.svg" />
              <p>{item.upvotes}</p>
            </UpvotesDesktop>

            <CenterDiv>
              <StyledTexts>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </StyledTexts>
              <StyledCategory>{item.category}</StyledCategory>
              <StyledBottom>
                <Upvotes>
                  <img src="/assets/shared/icon-arrow-up.svg" />
                  <p>{item.upvotes}</p>
                </Upvotes>
                <Comments>
                  <img src="/assets/shared/icon-comments.svg" />
                  {/* {item.comments.length} */}
                </Comments>
              </StyledBottom>
            </CenterDiv>
            <CommentsDesktop>
              <img src="/assets/shared/icon-comments.svg" />
              {/* {item.comments.length} */}
            </CommentsDesktop>
          </StyledDiv>
        );
      })}
    </>
  );
}

const StyledDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin: 24px;
  background-color: #fff;
  padding: 24px;
  border-radius: 10px;
  text-decoration: none;
  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
    margin-top: 24px;
    height: 0;
    min-height: 151px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const CenterDiv = styled.div`
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;
const StyledTexts = styled.div`
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
  gap: 4px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
