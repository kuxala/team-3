import React from "react";
import styled from "styled-components";
import SuggestionCard from "../components/SuggestionCard";
import SuggestionHeader from "../components/SuggestionHeader";
import HeaderComponent from "../components/Header";

export default function SuggestionsPage() {
  return (
    <>
      <ContainerDiv>
        <HeaderComponent />
        <div>
          <SuggestionHeader />
          <SuggestionCard />
        </div>
      </ContainerDiv>
    </>
  );
}

const ContainerDiv = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }

  @media screen and (min-width: 768px) and (max-width: 1068px) {
    display: flex;
    flex-direction: column;
  }
`;
