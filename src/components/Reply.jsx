import React, { useState } from "react";
import styled from "styled-components";

export default function Reply() {
  const [replyContent, setReplyContent] = useState("");

  const handleAddReply = () => {
    // if (replyContent.trim() !== "") {
    // Call addReply function with the content of the reply
    //   addReply(commentId, replyContent);
    // Clear the reply content after posting
    //   setReplyContent("");
    // }
  };
  return (
    <>
      <SyledContainer>
        <input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
        />
        <button onClick={handleAddReply}>Post Reply</button>
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
