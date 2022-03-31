import styled from 'styled-components'
import photoTitre from '../../assets/photoTitre.jpg'

import Appartments from '../../AppartmentsCards'
import Footer from '../../components/Footer'

//import Logo from '../../assets/logo.png'

// export const Title = styled.div`
//   position: absolute;
//   width: 1240px;
//   height: 1095px;
//   left: 100px;
//   top: 171px;
// `
export const TextTitleStyled = styled.span`
  position: absolute;
  text-align: center;
  z-index: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  width: 100%;
  font-weight: 300;
  color: #ffffff;
  top: 60px;
  @media (max-width: 700px) {
    font-size: 32px;
    text-align: left;
    padding-left: 15px;
    top: 73px;
  }
  @media (max-width: 450px) {
    font-size: 24px;}
`

const TitleCardStyled = styled.div`
 
  margin-top: 10px;
  
  max-width: 100%;
  height: 190px;
  background-color: light-grey;
  border-radius: 25px;
  // @media (max-width: 576px) {
  //   margin-right: 10px;
  //   margin-left: 10px;
  height : 170px;
  // }
`

export const TitleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  filter: brightness(1);
  background-color: #ff6060;
  z-index: 1;
  opacity: 0.7;
  // @media (max-width: 576px) {
  //   margin-right: 0px;
  // }
`
const LineStyled = styled.br`
  display: none;
  @media (max-width: 700px) {
    display: inline;
  }
`
const HomeContainerStyled = styled.div`
  margin-right: 80px;
  margin-left: 80px;
  position : relative;
  @media (max-width: 875px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`

function Home() {
  return (
    <div>
      <HomeContainerStyled>
        
        <TitleCardStyled>
          <TitleImage src={photoTitre}></TitleImage>
        </TitleCardStyled>
        <TextTitleStyled>
          Chez vous, <LineStyled />
          partout et ailleurs
        </TextTitleStyled>

        <Appartments />
      </HomeContainerStyled>
      <Footer />
    </div>
  )
}
export default Home

/* <TextTitle>Chez vous, partout et ailleurs</TextTitle>*/
