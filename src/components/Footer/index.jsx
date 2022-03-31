//import React from "react"
import styled from "styled-components"
import LOGOWh from '../../assets/LOGOWh.png'



const DivFooterStyled = styled.div`
  margin-top: 60px;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 24px;
  color: #ffffff;
  background-color: #000000;
  flex-direction: column;
`
const CopyRightStyled = styled.span`
margin-top: 20px;
color : #ffffff;
font-size: 24px;
@media(max-width:450px){
  font-size : 12px;
}
`

function Footer () {
return (
  <DivFooterStyled>
      <img src={LOGOWh} alt="logo footer"/>
    <CopyRightStyled>© 2020 Kasa. All rights reserved</CopyRightStyled>
  </DivFooterStyled>
)

}
export default Footer