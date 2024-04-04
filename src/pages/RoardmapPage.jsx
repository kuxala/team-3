import React, {useState, useEffect, useContext} from 'react'
import styled from "styled-components";
import {MyContext} from '../App';

export default function RoardmapPage() {
    const [isActive, setIsActive]  = useState([false,true, false]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    const {data, setData} = useContext(MyContext);
    
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 

    console.log(data.productRequests.map((item) => {
      return item
    }))
    return (
        <>
          <StyledContainer>

            <RodmapHeader>
              <div>
                <div>
                  <img src="assets/shared/icon-arrow-left.svg"/>
                  <p>Go Back</p>
                </div>
                <h3>Roadmap</h3>
              </div>
              <button>+ add Feedback</button>
            </RodmapHeader>

            {screenWidth < 768 
            ?             
            <SmallHeader>
              <p style={{ borderBottom: isActive[0] ? '4px solid #AD1FEA' : 'none', opacity: isActive[0] ? "1" : "0.5"}} onClick={() => setIsActive([true, false, false])}>Planned (1)</p>
              <p style={{ borderBottom: isActive[1] ? '4px solid #AD1FEA' : 'none', opacity: isActive[1] ? "1" : "0.5" }} onClick={() => setIsActive([false, true, false])}>In-Progress (1)</p>
              <p style={{ borderBottom: isActive[2] ? '4px solid #AD1FEA' : 'none', opacity: isActive[2] ? "1" : "0.5" }} onClick={() => setIsActive([false, false, true])}>Live (1)</p>
            </SmallHeader>
             : 
            <DesktopSmallHeader>
              
              <div>
                <p>Planned (1)</p>
                <span>Ideas prioritized for research</span>
                {data.productRequests.map((item) => {
                if (item.status == "planned"){
                  return <StyledDiv key={item.id} style={{borderTop: "5px solid #F49F85"}}>
                  <p>Planned</p>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <Feature>{item.category}</Feature>
                  <StyledBottom>
                      <Upvotes>
                        <img src="/assets/shared/icon-arrow-up.svg"/>
                        <p>{item.upvotes}</p>
                        
                      </Upvotes>
                        <Comments>
                          <img src="/assets/shared/icon-comments.svg"/>
                          {item.comments.length}
                        </Comments>
                  </StyledBottom>
                </StyledDiv>
                }
              })
            }
              </div>
              <div>
                <p>In Progress (1)</p>
                <span>Currently being developed</span>
                {data.productRequests.map((item) => {
                if (item.status == "in-progress"){
                  return <StyledDiv key={item.id} style={{borderTop: "5px solid #AD1FEA"}}>
                  <p>Planned</p>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <Feature>{item.category}</Feature>
                  <StyledBottom>
                      <Upvotes>
                        <img src="/assets/shared/icon-arrow-up.svg"/>
                        <p>{item.upvotes}</p>
                        
                      </Upvotes>
                        <Comments>
                          <img src="/assets/shared/icon-comments.svg"/>
                          {item?.comments?.length}
                        </Comments>
                  </StyledBottom>
                </StyledDiv>
                }
              })
            }
              </div>
              <div>
                <p>Live (1)</p>
                <span>Released features</span>
                {data.productRequests.map((item) => {
                if (item.status == "live"){
                  return <StyledDiv key={item.id} style={{borderTop: "5px solid #62BCFA"}}>
                  <p>Planned</p>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <Feature>{item.category}</Feature>
                  <StyledBottom>
                      <Upvotes>
                        <img src="/assets/shared/icon-arrow-up.svg"/>
                        <p>{item.upvotes}</p>
                        
                      </Upvotes>
                        <Comments>
                          <img src="/assets/shared/icon-comments.svg"/>
                          {item?.comments?.length}
                        </Comments>
                  </StyledBottom>
                </StyledDiv>
                }
              })
            }
              </div>
            </DesktopSmallHeader>
            }
                  
        
          </StyledContainer>
        </>
    );
}

const StyledDiv= styled.div`
  width: 100%;
  min-height: 272px;
  background-color: #fff;
  border-radius: 10px;
  padding: 32px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  & > p{
    color: #647196;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 8px;
  }
  & > h1 {
    color: #3A4374;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    padding-bottom: 4px;
  }
  & > span{
    color: #647196;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Feature = styled.div`
  margin-top: 16px;
  width: 35%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #F2F4FF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

`
const DesktopSmallHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 16px;
  & > div {
      width: 33%;
      margin: 24px 0;
      display: flex;
      flex-direction: column;
      & >p {
        color: #3A4374;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.25px;
        padding-bottom: 4px;
      }
      & > span{
        color: #647196;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 10px;
`;

const Upvotes = styled.div`
  width: 69px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #F2F4FE;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  
  &:hover{
      background-color: #CFD7FF;
    }

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
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledContainer = styled.div`
    @media only screen and (min-width: 768px){
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 50px;
  }
`;

const RodmapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 26px 24px;
  background: #373F68;

  @media only screen and (min-width: 768px){
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 50px;
  }
  & > div > div{
    display: flex;
    align-items: center;
    gap: 10px;
  
      & > p{
      color: #FFF;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  & > div > h3 {
    padding-top: 4px;
    color: #FFF;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  & > button {
    width: 134px;
    height: 40px;
    
    flex-shrink: 0;
    border-radius: 10px;
    border :none;
    outline: none;
    background: #AD1FEA;
    color: #F2F4FE;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    &:hover{
      opacity: 0.8;

    }
  }
`;

const SmallHeader = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  & >p{
    padding: 0 16px;
    height: 55px;
    display: flex;
    align-items: center;
    color: #3A4374;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.181px;
  }
  
`;
