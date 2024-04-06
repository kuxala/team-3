import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import arrow from "../../public/assets/shared/icon-arrow-left.svg";
import Icon from "../../public/assets/shared/icon-edit-feedback.svg";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../App";

export default function EditFeedbackPage() {
  const { data, setData, setCategory } = useContext(MyContext);
  const { userId } = useParams();
  const [feedbackData, setFeedbackData] = useState(null);

  // Fetch feedback data when component mounts
  useEffect(() => {
    // Find feedback data by user ID
    const feedbackItem = data.productRequests.find(
      (item) => item.id === parseInt(userId)
    );
    setFeedbackData(feedbackItem);
  }, [data, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFeedbackUpdate = () => {
    // Update feedback data in the context
    const updatedData = data.productRequests.map((item) => {
      if (item.id === feedbackData.id) {
        return feedbackData;
      }
      return item;
    });
    setData({ ...data, productRequests: updatedData });
  };

  const handleGoBack = () => {
    // Go back to the previous page
    window.history.back();
  };

  if (!feedbackData) {
    return <div>Loading...</div>;
  }

  return (
    <FeedbackContainer>
      <Header>
        <img src={arrow} alt="Back" />
        <StyledLink to="#" onClick={handleGoBack}>
          Go Back
        </StyledLink>
      </Header>
      <FeedbackForm>
        <img src={Icon} alt="Edit icon" className="Icon" />
        <Title>Editing '{feedbackData.title}'</Title>
        <Label>Feedback Title</Label>
        <Input
          type="text"
          name="title"
          value={feedbackData.title}
          onChange={handleInputChange}
        />
        <Label>Category</Label>
        <Select
          name="category"
          value={feedbackData.category}
          onChange={handleCategoryChange}
        >
          <Option value="Feature">Feature</Option>
          <Option value="UI">UI</Option>
          <Option value="UX">UX</Option>
          <Option value="Enhancement">Enhancement</Option>
          <Option value="Bug">Bug</Option>
        </Select>
        <Label>Update Status</Label>
        <Select>
          <Option value="Planned">Planned</Option>
          <Option value="In-Progress">In-Progress</Option>
          <Option value="Live">Live</Option>
        </Select>
        <Label>Feedback Detail</Label>
        <Comment
          name="description"
          value={feedbackData.description}
          onChange={handleInputChange}
        />
        <Buttons>
          <Button className="purple" onClick={handleFeedbackUpdate}>
            Update Feedback
          </Button>
          <Button className="blue" onClick={handleGoBack}>
            Cancel
          </Button>
          <Button className="delete">Delete</Button>
        </Buttons>
      </FeedbackForm>
    </FeedbackContainer>
  );
}

const StyledLink = styled(Link)`
  color: #647196;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
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

  & .Icon {
    position: absolute;
    top: -4%;
    left: 5%;
    width: 50px;
    height: 50px;
    background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    );
    padding: 10px;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 540px;

    & .Icon {
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
  /* width: 456px; */

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
  color: #3a4374;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  color: #3a4374;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  padding: 0.5rem;
  background-color: #f7f8fd;
  width: 279px;
  height: 48px;
  border-radius: 5px;
  border-style: none;
  @media screen and (min-width: 768px) {
    width: 456px;
  }
`;
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

  & .delete {
    background: #d73737;
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
    & .delete {
      width: 93px;
      margin-right: auto;
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
