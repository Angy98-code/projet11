import data from '../data'
import Card from '../components/Card'
import styled from 'styled-components'
//import { useParams } from "react-router-dom"
//import AppartmentChoice from "../AppartmentChoice"
import { Link } from 'react-router-dom'

export const ContainerCard = styled.div`
  display: flex;
  // enlever le justify-center pour eviter les 2 dernières carte centrer
  flex-wrap: wrap;
  margin-top: 30px;
  border-radius: 25px;
  max-width: 100%;
  background-color: rgba(220, 220, 220, 0.3);
  border-radius: 25px;
 
`
const LinkStyled = styled(Link)`
  width: 100%;
  @media (min-width: 850px) {
    width: 50%;
  }
  @media (min-width: 1350px) {
    width: 33%;
  }
`

function Appartments() {
  console.log(data)
  //let {id} = useParams()
  return (
    <ContainerCard>
      {data.map((appartment, index) => (
        <LinkStyled to={`/AppartmentChoice/${appartment.id}`} key={index}>
          <Card
            key={`${appartment.id}-${index}`}
            title={appartment.title}
            cover={appartment.cover}
          />
        </LinkStyled>
      ))}
    </ContainerCard>
  )
}
export default Appartments
// //données dans l'url
// {/* <a href={` /AppartmentChoice/${appartment.id}`}>
//           <Cards
//             key={`${appartment.id}-${index}`}
//             title={appartment.title}
//             cover={appartment.cover}
//           />
//         </a> */}
