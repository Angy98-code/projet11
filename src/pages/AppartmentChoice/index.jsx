import { useParams } from 'react-router-dom'
import data from '../../data'
import Carousel from '../../components/Carousel'
import styled from 'styled-components'
import Rating from '../../components/Rating' // pour props = stars
//import Chevron from 'react-chevron'
import '../../styles/index.css'
//import React, { useState } from "react"; //chevron
import CollapseDescriptionAndEquipments from '../../components/CollapseDescription&Equipments'
import Footer from '../../components/Footer'
//import NamehostAndPicture from '../../components/NameHostAndPicture'


//styled Title, country, name and host picture
//TitleHost is the main
export const ImageHostStyled = styled.img`
  width: 64px;
  height: 64px;
  background: #c4c4c4;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
`
export const ImgContainerStyled = styled.div`
  display: flex;
  align-items: center;
`
const TitleHostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 25px;
  @media (min-width: 876px) {
    margin-right: 80px;
    margin-left: 80px;
  }
`
const TitleAndLocationStyled = styled.div``

export const NamehostAndPictureStyled = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
   position: absolute; 
    top: 582px;
    right: 21px;
  }
  @media (max-width: 450px) {
    top: 565px;
    right: 21px;
  } 
`
export const NamehostStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  align-items: flex-end;
  text-align: right;
  color: #ff6060;
  @media (max-width: 450px) {
    line-height: 20px;
    font-size: 15px;
  }
`
const AppartmentTitleStyled = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  display: flex;
  align-items: flex-end;
  color: #ff6060;
  @media (max-width: 600px) {
    font-size: 28px;
    
  }
`
const AppartmentLocationStyled = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #ff6060;
`
//styled tags and likes
// TagAndLikesContainer is the main

const TagsAndRatingContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  @media (min-width: 876px) {
    margin-right: 80px;
    margin-left: 80px;
  }
  @media (max-width: 600px) {
    flex-direction : column;
    position : relative;
  }
`
const TagsListStyled = styled.span`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 25px;
  text-align: center;
  background-color: #ff6060;
  color: #ffffff;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: 15px;
  line-height: 24px;
  align-items: center;
  @media (max-width: 600px) {
   font-size: 12px;
  }
`
const TagsDivStyled = styled.div`
  display: flex;
`

//StarsDiv
const StarsDivStyled = styled.div`
  display: flex;
  @media (max-width: 600px) {
    margin-top: 25px;
  }
`
const StarGreyStyled = styled.span`
  color: #e3e3e3;
  position: relative;
`

const StarRedStyled = styled.span`
  color: #ff6060;
  position: absolute;
`
//description and equipments

const DescriptionAndEquipmentsBlocStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  column-gap: 50px;
  @media (min-width: 876px) {
    margin-right: 80px;
    margin-left: 80px;
  }
  @media (max-width: 600px) {
    flex-direction:column;
    row-gap : 25px;
  }
`
// const DivDisplayNoneStyled = styled.div`
// display: none;
//   @media (max-with: 600px) {
//     display: flex;
//     justify-content: space-between;
//     background-color : red;
//     width : 50px;
//     height : 50px ;
//   }
// `




function AppartmentChoice() {
  const params = useParams()
  const { id } = params
  const appartment = data.find((element) => element.id === id)

  // usename and name up & down
  const HostName = appartment.host.name.split(' ')
  console.log(HostName)
  //the stars rating
  const HostRating = appartment.rating
  const Rate = parseInt(HostRating)
  console.log('rate : ', Rate, typeof Rate)
  //the description
  const Description = appartment.description
  console.log(Description)
  const Equipments = appartment.equipments
  console.log(Equipments)
  console.log('appartment.pictures', appartment.pictures)
  const PicturesDataArray = appartment.pictures

  return (
    <div>
      <Carousel slides={PicturesDataArray} />

      <TitleHostStyled>
        <TitleAndLocationStyled>
          <AppartmentTitleStyled>{appartment.title}</AppartmentTitleStyled>
          <AppartmentLocationStyled>
            {appartment.location}
          </AppartmentLocationStyled>
        </TitleAndLocationStyled>

        <NamehostAndPictureStyled>
          <NamehostStyled>
            {HostName.map((element, index) => (
              <span key={index}>{element}</span>
            ))}
          </NamehostStyled>
          <ImgContainerStyled>
            <ImageHostStyled src={appartment.host.picture}></ImageHostStyled>
          </ImgContainerStyled>
        </NamehostAndPictureStyled>
      </TitleHostStyled>

      <TagsAndRatingContainerStyled>
        <TagsDivStyled>
          {appartment.tags.map((tag, index) => (
            <TagsListStyled key={index}>{tag}</TagsListStyled>
          ))}
        </TagsDivStyled>

        <StarsDivStyled>
          <StarGreyStyled>
            <Rating stars={5} />
          </StarGreyStyled>

          <StarRedStyled>
            <Rating stars={appartment.rating} />
          </StarRedStyled>
        </StarsDivStyled>

        
      </TagsAndRatingContainerStyled>

      <DescriptionAndEquipmentsBlocStyled>
        <CollapseDescriptionAndEquipments
          title="Description"
          key="Description"
          content={appartment.description}
        />
        <CollapseDescriptionAndEquipments
          title="Equipments"
          key="Equipments"
          content={appartment.equipments.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        />
      </DescriptionAndEquipmentsBlocStyled>
      <Footer />
    </div>
  )
}
export default AppartmentChoice

//  <EquipmentsDivStyled>
//           <EquipmentsTextStyled>
//             <p>Equipements</p>
//             <Chevron direction={'up'} className="chevronUp" />
//           </EquipmentsTextStyled>
//           <EquipmentsInformationStyled>
//             {appartment.equipments.map((equipment, index) => (
//               <span key={index}>{equipment}</span>
//             ))}
//           </EquipmentsInformationStyled>
//         </EquipmentsDivStyled>
// const EquipmentsDivStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `

// const EquipmentsInformationStyled = styled.div`
//   display: flex;
//   position: relative;
//   top: -6px;
//   flex: 1;
//   flex-direction: column;
//   background-color: rgba(220, 220, 220, 0.3);
//   padding-left: 20px;
//   padding-right: 20px;
//   padding-top: 50px;
//   padding-bottom: 30px;
//   border-radius: 10px;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 26px;
//   color: #ff6060;
// `

// const EquipmentsTextStyled = styled.div`
//   display: flex;
//   z-index:1;
//   justify-content: space-between;
//   align-items: center;
//   padding-right: 15px;
//   flex-direction: row;
//   padding-left: 15px;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 26px;
//   color: #ffffff;
//   background-color: #ff6060;
//   border-radius: 10px;
// `

// {
//   /*
// <EquipmentsDivStyled>
//   <EquipmentsTextStyled>
//     <p>Equipements</p>
//     <Chevron direction={'up'} className="chevronUp" />
//   </EquipmentsTextStyled>
//   <EquipmentsInformationStyled>

//     {appartment.equipments.map((equipment, index) => (
//       <span key={index}>{equipment}</span>
//     ))}

//   </EquipmentsInformationStyled>
// </EquipmentsDivStyled> */
// }
