import React from 'react'
import styled from "styled-components"
import SuggestionCard from '../components/SuggestionCard'
import SuggestionHeader from '../components/SuggestionHeader'


export default function SuggestionsPage() {

    return (
        <>
          <ContainerDiv>
            <SuggestionHeader/>
            <SuggestionCard/>
          </ContainerDiv>
        </>
    )
}



const ContainerDiv = styled.div`
    
`

