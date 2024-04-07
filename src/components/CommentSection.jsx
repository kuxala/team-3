import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../App";
import { useParams, Link } from "react-router-dom";
import AddComment from "./AddComment";
import Reply from "./Reply";

export default function CommentSection() {
  const { data, setData } = useContext(MyContext);
  let { userId } = useParams();
  // console.log(data.productRequests);
  const [replyToCommentId, setReplyToCommentId] = useState(null);

  const setComments = (comments) => {
    setData((prevData) => ({
      ...prevData,
      productRequests: prevData.productRequests.map((item) =>
        item.id === userId ? { ...item, comments: comments } : item
      ),
    }));
  };
  return (
    <>
      {data.productRequests.map((item) => {
        if (userId == item.id) {
          return (
            <WholeDiv key={item.id}>
              <h3>{item?.comments?.length} Comment</h3>
              <ul key={item.id}>
                {item?.comments?.map((comment) => {
                  return (
                    <StyledContainer key={comment.id}>
                      <div>
                        <img src={`.${comment.user.image}`} />
                        <div>
                          <div>
                            <p>{comment.user.name}</p>
                            <span>@{comment.user.username}</span>
                          </div>
                          <a onClick={() => setReplyToCommentId(comment.id)}>
                            Reply
                          </a>
                        </div>
                      </div>

                      <Description>{comment.content}</Description>
                      {replyToCommentId === comment.id && (
                        <Reply
                          setComments={setComments}
                          commentId={comment.content}
                          setReplyToCommentId={setReplyToCommentId}
                        />
                      )}
                      {comment.replies &&
                        comment.replies.map((reply, index) => (
                          <StyledReply key={index}>
                            <main>
                              <img src={`.${reply.user.image}`} />
                              <div className="reply-texts">
                                <p>{reply.user.name}</p>
                                <span>@{reply.user.username}</span>
                              </div>
                            </main>
                            <Description>{reply.content}</Description>
                          </StyledReply>
                        ))}

                      <div
                        style={{
                          borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                          paddingBottom: "24px",
                        }}
                      ></div>
                    </StyledContainer>
                  );
                })}
              </ul>
            </WholeDiv>
          );
        }
        return null;
      })}

      <AddComment postId={userId} />
    </>
  );
}
const StyledReply = styled.section`
  width: 93%;
  margin-left: 54px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (left) */


  .reply-texts {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align text to the start (top) */
    text-align: left;
    align-items: flex-start; /* Align text to the start (left) */
    margin-left: 12px; /* Adjust margin for spacing between image and text */
  }

  img {
    border-radius: 50%;
    width: 40px; /* Set width for the image */
    height: 40px; /* Set height for the image */
  }


  & > main {
    display: flex;
    gap: 8px;
    align-items: center;

    & > div > p {
      color: #3a4374;
      font-family: Jost;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.194px;
    }
    & > div > span {
      color: #647196;
      font-family: Jost;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
const WholeDiv = styled.div`
  /* min-height: 400px; */
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 100px;
    width: 825px;
    /* min-height: 500px; */
    background-color: #fff;
  }
  & > h3 {
    color: #3a4374;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    padding: 24px;
  }
`;
const Description = styled.p`
  padding-left: 56px;
  padding-top: 18px;
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: wrap;
`;
const StyledContainer = styled.div`
  margin: 0 24px;
  background-color: #fff;
  padding: 34px;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    max-width: 835px;
    margin: 0 auto;
    margin-top: 30px;
  }
  & > h3 {
    padding-bottom: 28px;
    color: #3a4374;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  & div > img {
    width: 40px;
    border-radius: 50%;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  & > div > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > div > div > p {
    color: #3a4374;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.194px;
  }
  & div > div > div > span {
    color: #647196;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & div > div > a {
    color: #4661e6;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
