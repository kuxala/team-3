import React, { useContext } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../App";
import CommentSection from "../components/CommentSection";

export default function Id() {
  let { userId } = useParams();
  // console.log("UserId : ", userId)
  const { data, setData, upvoteStates, setUpvoteStates, handleUpdate } =
    useContext(MyContext);

  return (
    <>
      <div>
        <StyledHeader>
          <div>
            <img src="/assets/shared/icon-arrow-left.svg" />
            <StyledGoBack to="/">Go Back</StyledGoBack>
          </div>
          <StyledLink to="/edit-feedback">Edit Feedback</StyledLink>
        </StyledHeader>
        {data.productRequests.map((item) => {
          if (userId == item.id) {
            return (
              <StyledDiv key={item.id}>
                <UpvotesDesktop
                  style={{
                    backgroundColor: upvoteStates[item.id]
                      ? "#bec9fc"
                      : "#f2f4fe",
                  }}
                  onClick={() => {
                    handleUpdate(item.id);
                  }}
                >
                  <img src="/assets/shared/icon-arrow-up.svg" />
                  <p
                  // style={{
                  //   color: upvoteStates[item.id] ? "#fff" : "#3a4374",
                  // }}
                  >
                    {item.upvotes}
                  </p>
                </UpvotesDesktop>

                <CenterDiv>
                  <StyledTexts>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </StyledTexts>
                  <StyledCategory>{item.category}</StyledCategory>
                  <StyledBottom>
                    <Upvotes
                      style={{
                        backgroundColor: upvoteStates[item.id]
                          ? "#bec9fc"
                          : "#f2f4fe",
                      }}
                      onClick={() => {
                        handleUpdate(item.id);
                      }}
                    >
                      <img src="/assets/shared/icon-arrow-up.svg" />
                      <p>{item.upvotes}</p>
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
          }
        })}
      </div>
      {/* <CommentSection /> */}
    </>
  );
}
const StyledGoBack = styled(Link)`
  text-decoration: none;
  color: #647196;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin: 24px;
  background-color: #fff;
  padding: 24px;
  border-radius: 10px;
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
`;
const CenterDiv = styled.div`
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;
const StyledTexts = styled.div`
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

  & > Link {
    color: #3a4374;
    text-align: center;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;
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

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  @media only screen and (min-width: 768px) {
    max-width: 825px;
    margin: 0 auto;
    margin-top: 50px;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
    & > p {
      color: #647196;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
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
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
