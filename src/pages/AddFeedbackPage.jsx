import React from "react";
import styled from "styled-components";
import arrow from "/Users/ani/Desktop/team-3/public/assets/shared/icon-arrow-left.svg";
import iconPlus from "/Users/ani/Desktop/team-3/public/assets/shared/icon-plus.svg";

export default function AddFeedbackPage() {
  return (
    <FeedbackContainer>
      <Header>
        <img src={arrow} />
        <span>Go Back</span>
      </Header>
      <FeedbackForm>
        <img src={iconPlus} className="iconPlus" />
        <Title>Create New Feedback</Title>
        <Label>Feedback Title</Label>
        <Labeltext>Add a short, descriptive headline</Labeltext>
        <Input type="text"></Input>

        <Label>Category</Label>
        <Labeltext>Choose a category for your feedback</Labeltext>

        <Select name="Feature" className="select">
          <Option disabled selected>
            Feature{" "}
          </Option>
          <Option value="UI">UI</Option>
          <Option value="UX">UX</Option>
          <Option value="UX">Enhancement</Option>
          <Option value="UX">Bug</Option>
        </Select>

        <Label>Feedback Detail</Label>
        <Labeltext>
          Include any specific comments on what should be improved, added, etc.
        </Labeltext>
        <Comment type="text" />

        <Buttons>
          <Button className="purple">Add Feedback</Button>
          <Button className="blue">Cancel</Button>
        </Buttons>
      </FeedbackForm>
    </FeedbackContainer>
  );
}

const FeedbackContainer = styled.div`
  width: 327px;
  margin: auto;
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
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.01px;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

const Label = styled.h3`
  font-size: 13px;
  font-weight: 700;
  line-height: 18.79px;
  letter-spacing: -0.1805555522441864px;
  color: #3a4374;
  padding-top: 10px;
`;
const Labeltext = styled.h2`
  font-size: 13px;
  font-weight: 400;
  line-height: 18.79px;
  color: #647196;
`;

const Input = styled.input`
  background-color: #f7f8fd;
  width: 279px;
  height: 48px;
  border-radius: 5px;
  border-style: none;
`;

const Comment = styled.textarea`
  background-color: #f7f8fd;
  width: 279px;
  height: 120px;
  border-radius: 5px;
  border-style: none;
  border: none;
  resize: none;
`;

const Select = styled.select``;
const Option = styled.option``;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & .purple {
    background-color: #ad1fea;
  }

  & .blue {
    background-color: #3a4374;
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
