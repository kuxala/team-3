import React from 'react'
import styled from "styled-components";

export default function CommentSection() {
    

    return (
        <>
        <StyledContainer>
            <h3>0 Comments</h3>
            <div >
                <img src="/assets/user-images/image-anne.jpg"/>
                <div >
                    <div>
                        <p>Name</p>
                        <span>UserName</span>
                    </div>
                    <a>Reply</a>
                </div>
            </div>
            <Description style={{borderBottom: "1px solid rgba(128, 128, 128, 0.5)", paddingBottom:"24px"}}>
            Also, please allow styles to be applied based on system preferences. I would love to be 
            able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
            </Description>
        </StyledContainer>         
        </>
    )
}
const Description = styled.div`
    padding-left: 56px;
    padding-top: 18px;
    color: #647196;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const StyledContainer = styled.div`
    margin: 0 24px;
    background-color: #fff;
    padding: 34px;
    border-radius: 10px;
    @media only screen and (min-width: 768px){
        width: 50%;
        margin: 0 auto;
        margin-top: 30px;
    }
    & > h3{
        padding-bottom: 28px;
        color: #3A4374;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.25px;
    }
    & div > img {
        width: 40px;
        border-radius: 50%;
    }
    & > div{
        display: flex;
        align-items: center;
        gap: 16px;
        
    }
    & > div > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & > div > div >  div > p {
        color: #3A4374;
        font-family: Jost;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.194px;
    }
    & div > div > div > span{
        color: #647196;
        font-family: Jost;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    & div > div > a {
        color: #4661E6;
        font-family: Jost;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`