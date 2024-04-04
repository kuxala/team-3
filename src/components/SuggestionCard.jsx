import styled from "styled-components"
import React, { useContext } from 'react';
import {MyContext} from '../App';
import SuggestionHeader from "./SuggestionHeader";

export default function SuggestionCard() {

  const {data, setData} = useContext(MyContext);
  
    console.log(data.productRequests.map((item) =>{
      return item.comment
    }))
  
  
    return (
        <>
        
        {data.productRequests.map((item) =>{
          return <StyledDiv key={item.id}>
            <StyledTexts>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </StyledTexts>
            <StyledCategory>{item.category}</StyledCategory>
            <StyledBottom>
              <Upvotes>
                <img src="/assets/shared/icon-arrow-up.svg"/>
                <p>{item.upvotes}</p>
                </Upvotes>
                <Comments>
                <img src="/assets/shared/icon-comments.svg"/>
                {/* {item.comments.length} */}
                </Comments>
            </StyledBottom>
          </StyledDiv>
        })}
            
        </>
    )
}


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    margin: 24px;
    background-color: #fff;
    padding: 24px;
    border-radius: 10px;
`

const StyledTexts = styled.div`
  & > h3{
    color: #3A4374;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;
  }
  & > p{
    padding: 9px 0;
    color: #647196;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

`
const StyledCategory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 111px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F2F4FF;
    color: #4661E6;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

`

const Upvotes = styled.div`
  min-width: 69px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #F2F4FE;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  & > p{
    color: #3A4374;
    text-align: center;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;
  }
`


const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`