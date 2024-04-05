import React from "react";
import styled from "styled-components";
import SuggestionCard from "../components/SuggestionCard";
import SuggestionHeader from "../components/SuggestionHeader";
import HeaderComponent from "../components/Header";

export default function SuggestionsPage() {
  return (
    <>
      <ContainerDiv>
        <HeaderComponent/>
        <SuggestionHeader />
        <SuggestionCard />
      </ContainerDiv>
    </>
  );
}

const ContainerDiv = styled.div``;
