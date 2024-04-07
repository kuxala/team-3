import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../App";
import { useParams } from "react-router-dom";

export default function AddComment({ postId }) {
  const { data, setData } = useContext(MyContext);
  const { userId } = useParams();
  console.log(data.productRequests);
  const [commentContent, setCommentContent] = useState("");

  const generateCommentId = () => {
    // Find the highest existing comment ID for the specific post
    const post = data.productRequests.find(
      (post) => post.id === parseInt(postId)
    );
    const existingIds = post ? post.comments.map((comment) => comment.id) : [];

    // If there are no existing comments, start from 0; otherwise, increment the highest ID by 1
    const newId = existingIds.length === 0 ? 0 : Math.max(...existingIds) + 1;

    return newId.toString(); // Convert to string
  };

  const addComment = () => {
    if (commentContent.trim() !== "") {
      const newComment = {
        id: generateCommentId(),
        content: commentContent.trim(),
        user: {
          image: "./assets/user-images/image-zena.jpg",
          name: "Zena Kelley",
          username: "velvetround",
        },
      };

      // Update the data with the new comment
      const updatedData = {
        ...data,
        productRequests: data.productRequests.map((post) => {
          if (post.id === parseInt(postId)) {
            // Use postId to find the matching post
            return {
              ...post,
              comments: post.comments
                ? [...post.comments, newComment]
                : [newComment],
            };
          }
          return post;
        }),
      };

      // Set the updated data
      setData(updatedData);

      // Clear the comment content
      setCommentContent("");
    }
  };

  return (
    <>
      <StyledContainer>
        <h3>Add Comment</h3>
        <textarea
          placeholder="Type your comment here"
          maxLength={250}
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        ></textarea>
        <div>
          <p>Max Characters 250</p>
          <button onClick={addComment}>Post Comment</button>
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
