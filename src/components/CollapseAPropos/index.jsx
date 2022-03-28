import React, { useState } from 'react'
import Chevron from 'react-chevron'
import styled from 'styled-components'

const InformationDivStyled = styled.div`
  position: relative;
  top: -6px;
  display: flex;
  background-color: rgba(220, 220, 220, 0.3);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  padding-bottom: 30px;
  color: #ff6060;
  flex: 1;
`

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const TextStyled = styled.div`
  display: flex;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #ffffff;
  background-color: #ff6060;
`
const ButtonChevronStyled = styled.button`
  color: #ffffff;
  background-color: #ff6060;
  border: none;
  font-size: 25px;
`

function CollapseAPropos ({ title, content }) {
  const [show, setShow] = useState(true)
  
  return (
    <DivStyled>
      <TextStyled>
        <p>{title}</p>
        {/* avec chevron toggle ne fonctionne pas, button obligatoire ?? */}
        <ButtonChevronStyled
          onClick={() => setShow((show) => !show)}
          // direction={'up'}
          className="chevronUp"
        >
          {/* {show ? <Chevron direction={'down'} /> : <Chevron direction={'up'} />} */}
          <Chevron direction={show ? 'down' : 'up'} />
        </ButtonChevronStyled>
      </TextStyled>
      <InformationDivStyled
        style={{ display: !show ? 'block' : 'none' }}
      >
        {content}
      </InformationDivStyled>
    </DivStyled>
  )
}
export default CollapseAPropos
