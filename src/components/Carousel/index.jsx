import styled from 'styled-components'
import React, { useState } from 'react'
import data from '../../data'
import { useParams } from 'react-router-dom'
import Chevron from 'react-chevron'
import '../../styles/slide.css'

const ImageCardStyled = styled.div`
position: relative;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    max-width: 100%;
    height: 280px;
    background-color: rgba(220, 220, 220, 0.3);
    border-radius: 25px;
    @media(min-width : 876px){
     margin-right: 80px;
    margin-left: 80px;
    
}
`
const ImageStyled = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`

const ChevronLeftStyled = styled.div`
  color: #ffffff;
  font-size: 90px;
  top: 80px;
  left: 0px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1000px) {
    left: 0px;
  }
  @media (max-width: 600px) {
   font-size: 40px;
   top : 120px;
  }
`
const ChevronRightStyled = styled.div`
  color: #ffffff;
  font-size: 90px;
  top: 80px;
  right: -24px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1000px) {
    right: -12px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    top: 120px;
  }
`

// const SlideStyled = styled.div`
//   opacity: 0;
//   transition-duration: 1s ease;
//   &:active {
//     opacity: 1;
//     transition-duration: 1s;
//     transform: scale(1.08);
//   }
// `

// .slide {
//   opacity: 0;
//   transition-duration: 1s ease;
// }

// .slide.active {
//   opacity : 1;
//   transition-duration : 1s;
//   transform : scale(1.08);
// }

const IndexStyled = styled.div`
  right: 45%;
  color: #ffffff;
  font-size: 20px;
  position : absolute;
  bottom: 0;
  z-index:1;
`

function Carousel({ slides }) {
  const params = useParams()
  const { id } = params
  const appartment = data.find((element) => element.id === id)
  const PicturesDataArray = appartment.pictures
  console.log('PicturesDataArray', PicturesDataArray)
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  console.log('current', current)
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div>
      <ImageCardStyled>
        <ChevronLeftStyled onClick={prevSlide}>
          <Chevron direction={'left'} />
        </ChevronLeftStyled>

        <ChevronRightStyled onClick={nextSlide}>
          <Chevron direction={'right'} />
        </ChevronRightStyled>

        <IndexStyled>
          {current + 1}/{length}
        </IndexStyled>

        {PicturesDataArray.map((slide, index) => {
          return (
            <div
              key={index}
              //animation dans slide css probleme disposition responsif
              // className={index === current ? 'slide active' : 'slide'}
            >
              {index === current && (
                <ImageStyled src={slide} alt="appartment image" />
              )}
            </div>
          )
        })}
      </ImageCardStyled>
    </div>
  )
}
export default Carousel



