import React, { useState, useContext } from "react";
import styled from "styled-components";
import arrow from "../../public/assets/shared/icon-arrow-left.svg";
import iconPlus from "../../public/assets/shared/icon-plus.svg";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

export default function AddFeedbackPage() {
  const {
    data,
    setData,
    feedbackTitle,
    setFeedbackTitle,
    category,
    setCategory,
    feedbackDetail,
    setFeedbackDetail,
  } = useContext(MyContext);

  // console.log("title: ", feedbackTitle);
  // console.log("categoty: ", category);
  // console.log("detail: ", feedbackDetail);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const titleValue = feedbackTitle.trim();
    const detailValue = feedbackDetail.trim();

    // Check if inputs are empty
    if (!titleValue || !detailValue) {
      alert("Please fill in all the fields");
      return; // Exit the function if inputs are empty
    }

    const newFeedback = {
      id: data.productRequests.length + 1,
      title: feedbackTitle,
      category: category,
      upvotes: 0,
      status: "suggestion",
      description: feedbackDetail,
      comments: [],
    };

    const updatedData = {
      ...data,
      productRequests: [...data.productRequests, newFeedback],
    };

    setData(updatedData);
    setFeedbackTitle("");
    // setCategory("");
    setFeedbackDetail("");
  };
  return (
    <FeedbackContainer>
      <Header>
        <img src={arrow} />
        <StyledLink to="#" onClick={handleGoBack}>
          Go Back
        </StyledLink>
      </Header>
      <FeedbackForm onSubmit={handleSubmit}>
        <img src={iconPlus} className="iconPlus" />
        <Title>Create New Feedback</Title>
        <Label>Feedback Title</Label>
        <Labeltext>Add a short, descriptive headline</Labeltext>
        <Input
          type="text"
          value={feedbackTitle}
          onChange={(e) => setFeedbackTitle(e.target.value)}
        ></Input>

        <Label>Category</Label>
        <Labeltext>Choose a category for your feedback</Labeltext>

        <Select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <Option value="feature">Feature</Option>
          <Option value="UI">UI</Option>
          <Option value="UX">UX</Option>
          <Option value="Enhancement">Enhancement</Option>
          <Option value="Bug">Bug</Option>
        </Select>

        <Label>Feedback Detail</Label>
        <Labeltext>
          Include any specific comments on what should be improved, added, etc.
        </Labeltext>
        <Comment
          type="text"
          value={feedbackDetail}
          onChange={(e) => setFeedbackDetail(e.target.value)}
        />

        <Buttons>
          <ButtonLink
            className="purple"
            type="submit"
            onClick={handleSubmit}
            to="/"
          >
            Add Feedback
          </ButtonLink>
          <Button className="blue" type="button" onClick={handleGoBack}>
            Cancel
          </Button>
        </Buttons>
      </FeedbackForm>
    </FeedbackContainer>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #647196;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 10px;
`;

const FeedbackContainer = styled.div`
  width: 327px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 540px;
    margin: auto;
  }
`;

const Header = styled.div`
  & span {
    padding-left: 10px;
    color: #647196;
    font-size: 13px;
    font-weight: 700;
    line-height: 18.79px;
  }
  padding-top: 20px;
`;

const FeedbackForm = styled.div`
  background-color: #647196;
  width: 327px;
  position: relative;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  border-radius: 15px;

  & .iconPlus {
    position: absolute;
    top: -4%;
    left: 5%;
    width: 40px;
    height: 40px;
    background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    );
    padding: 15px;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 540px;

    & .iconPlus {
      width: 48px;
      height: 48px;
      left: 6%;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.01px;
  letter-spacing: -0.25px;
  color: #3a4374;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 34.68px;
    font-weight: 700;
    padding-top: 10px;
    width: 456px;
  }
`;

const Label = styled.h3`
  font-size: 13px;
  font-weight: 700;
  line-height: 18.79px;
  letter-spacing: -0.1805555522441864px;
  color: #3a4374;
  padding-top: 10px;
  width: 456px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20.79px;
    width: 456px;
  }
`;
const Labeltext = styled.h2`
  font-size: 13px;
  font-weight: 400;
  line-height: 18.79px;
  color: #647196;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    width: 456px;
  }
`;

const Input = styled.input`
  padding: 1rem;
  background-color: #f7f8fd;
  width: 279px;
  height: 48px;
  border-radius: 5px;
  border-style: none;

  @media screen and (min-width: 768px) {
    width: 456px;
  }
`;

const Comment = styled.textarea`
  padding: 1rem;
  background-color: #f7f8fd;
  width: 279px;
  height: 120px;
  border-radius: 5px;
  border-style: none;
  border: none;
  resize: none;
  @media screen and (min-width: 768px) {
    width: 456px;
  }
`;

const Select = styled.select`
  background-color: #f7f8fd;

  width: 279px;
  height: 48px;
  border-radius: 5px;
  border-style: none;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    width: 456px;
  }
`;

const Option = styled.option`
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  padding: 1rem;
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 20px;
  & .purple {
    background-color: #ad1fea;
  }

  & .blue {
    background-color: #3a4374;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    width: 456px;
    column-gap: 15px;
    flex-direction: row-reverse;
    & .blue {
      width: 93px;
    }

    & .purple {
      width: 144px;
    }

    & .blue:hover {
      background-color: #656ea3;
      cursor: pointer;
    }

    & .purple:hover {
      background: #c75af6;
      cursor: pointer;
    }
  }
`;
const Button = styled.button`
  width: 279px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
  color: #f2f4fe;
  font-size: 13px;
  font-weight: 700;
`;
const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 279px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
  color: #f2f4fe;
  font-size: 13px;
  font-weight: 700;
`;
