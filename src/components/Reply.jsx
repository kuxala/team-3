import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../App";

export default function Reply({ setComments, commentId }) {
  let { userId } = useParams();
  const { data, setData } = useContext(MyContext);
  const [replyContent, setReplyContent] = useState("");

  const addReply = () => {
    if (replyContent.trim() !== "") {
      const newReply = {
        user: {
          name: "Zena Kelley",
          username: "velvetround",
          image: "./assets/user-images/image-zena.jpg",
        },
        content: replyContent.trim(),
      };

      // Update the data with the new reply
      const updatedData = {
        ...data,
        productRequests: data.productRequests.map((post) => {
          const updatedComments = post?.comments?.map((comment) => {
            if (comment.content === commentId) {
              return {
                ...comment,
                replies: comment.replies
                  ? [...comment.replies, newReply]
                  : [newReply],
              };
            }
            return comment;
          });

          return {
            ...post,
            comments: updatedComments,
          };
        }),
      };

      // Set the updated data
      setData(updatedData);

      // Clear the reply content
      setReplyContent("");
    }
  };

  return (
    <>
      <SyledContainer>
        <input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
        />
        <button onClick={addReply}>Post Reply</button>
      </SyledContainer>
    </>
  );
}

const SyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  /* height: 100px; */
  padding-left: 56px;
  /* padding-top: 18px; */
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  & > input {
    padding: 1rem;
    width: 70%;
    height: 80px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #4661e6;
    background: #f7f8fd;
  }
  & > button {
    border-radius: 10px;
    background: #ad1fea;
    width: 25%;
    height: 44px;
    flex-shrink: 0;
    color: #f2f4fe;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
