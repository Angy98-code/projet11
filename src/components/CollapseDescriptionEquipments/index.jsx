//import { useParams } from 'react-router-dom'
//import data from '../../data'

import React, { useState } from 'react'
import Chevron from 'react-chevron'
import styled from 'styled-components'

const DescriptionInformationStyled = styled.div`
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
  font-size: 18px;
  line-height: 26px;
  padding-bottom: 30px;
  color: #ff6060;
  flex: 1;
  @media (max-width: 450px) {
    font-size: 12px;
  }
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
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  background-color: #ff6060;
  @media (max-width: 450px) {
    font-size: 13px;
  }
`
const ButtonChevronStyled = styled.button`
  color: #ffffff;
  background-color: #ff6060;
  border: none;
  font-size: 25px;
`

function CollapseDescriptionAndEquipments({ title, content }) {
  //const params = useParams()
  //const { id } = params
  //const appartment = data.find((element) => element.id === id)
  const [show, setShow] = useState(true)
  // console.log('equipments', equipments)

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
      <DescriptionInformationStyled
        style={{ display: !show ? 'block' : 'none' }}
      >
        {content}
        {/*  content paramètre props */}
      </DescriptionInformationStyled>
    </DivStyled>
  )
}
export default CollapseDescriptionAndEquipments
