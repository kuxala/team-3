import React, {useState} from 'react'
import styled from "styled-components"


export default function RoardmapPage() {
    const [isActive, setIsActive]  = useState([false,true, false])
    
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

            <SmallHeader>
              <p style={{ borderBottom: isActive[0] ? '4px solid #AD1FEA' : 'none', opacity: isActive[0] ? "1" : "0.7"}} onClick={() => setIsActive([true, false, false])}>Planned (1)</p>
              <p style={{ borderBottom: isActive[1] ? '4px solid #AD1FEA' : 'none', opacity: isActive[1] ? "1" : "0.7" }} onClick={() => setIsActive([false, true, false])}>In-Progress (1)</p>
              <p style={{ borderBottom: isActive[2] ? '4px solid #AD1FEA' : 'none', opacity: isActive[2] ? "1" : "0.7" }} onClick={() => setIsActive([false, false, true])}>Live (1)</p>
            </SmallHeader>
            

          </StyledContainer>
        </>
    )
}




const StyledContainer = styled.div`
    
`

const RodmapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 26px 24px;
  background: #373F68;
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
  }
`

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
  
  
`