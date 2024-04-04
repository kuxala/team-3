import React from 'react'
import styled from "styled-components"


export default function SuggestionHeader() {

    return (
        <>
            <SuggestionHeaderDiv>
              <div>
                <p>Sort By: </p>
                <span>Most Upwotes</span> {/*sorting  here*/}
                <img src="/assets/shared/icon-arrow-down.svg"/>
              </div> 
              <button>+ Add Feedback</button>
            </SuggestionHeaderDiv>
        </>
    )
}
const SuggestionHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background: #373F68;

  
  & > div{
    display: flex; 
    gap: 5px;
    align-items: center;
    
    & > p{
      color: #F2F4FE;
      text-align: right;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > span{
      color: #F2F4FE;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  & > button{
    width: 134px;
    height: 40px;
    flex-shrink: 0;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #AD1FEA;
    color: #F2F4FE;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
`