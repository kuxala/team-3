import React from 'react'
import styled from "styled-components";
import SuggestionHeader from '../components/SuggestionHeader';



export default function HomePage() {
    

    return (
        <>
        <SuggestionHeader/>
            <StyledDiv>
                <img src="/assets/suggestions/illustration-empty.svg"/>
                <h1>There is no feedBack yet.</h1>
                <p>
                    Got a suggestion? Found a bug that needs to
                    be squashed? We love hearing about new ideas to improve our app.
                </p>
                <button>+ Add Feedback</button>
            </StyledDiv>
        </>
    )
}


const StyledDiv =styled.div`
    margin: 30px 24px;
    margin-top: 100px;
    background-color: #fff;
    padding: 76px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    
    & > h1{
        padding-top: 40px;
        padding-bottom: 40px;
        color: #3A4374;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.25px;
    }
    & > p {
        color: #647196;
        text-align: center;
        font-family: Jost;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    & > button {
        margin-top: 24px;
        width: 134px;
        height: 40px;
        flex-shrink: 0;
        outline: none;
        border:none;
        border-radius: 10px;
        background: #AD1FEA;
        color: #F2F4FE;
        font-family: Jost;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

    }
`