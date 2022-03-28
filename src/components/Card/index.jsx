import styled from 'styled-components'

//effet ombre sur la 1ere div CardStyled avec position relative
//et after

export const CardStyled = styled.div`
  cursor: pointer;
  position: relative;
  border: none;
  margin: 40px;
  z-index: 3;
  max-width: 100%;
  height: 340px;
  border-radius: 25px;  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius : 25px;
  }
`

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  filter: brightness(1);
  background-color: #ff6060;
  z-index: 1;
  // opacity: 0.7;
`

export const CardTitle = styled.span`
  position: absolute;
  left: 20px;
  right: 10px;
  top: 280px;
  bottom: 60px;
  z-index: 4;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  color: #ffffff;
  @media(max-width : 380px){
   font-size: 15px;
  }
`

function Card({ title, cover }) {
  //let navigate = useNavigate()
  //let {id} = useParams()
  return (
    <div>
      <CardStyled>
        <CardTitle>{title}</CardTitle>
          <ImageCard src={cover} alt="Appartments" />
      </CardStyled>
    </div>
  )
}
export default Card
// Cards.propTypes = {
//  // id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// //  cover: PropTypes.string.isRequired,
// }

// Card.defaultProps = {
//   id: '',
//   title: '',
//   cover: DefaultPicture,
// }

//----------avec link mais il faut récuperer les id! donc non
// function Cards({id, title, cover}) {
//   return (
//     <Link to="/AppartmentChoice">
//       <Card>
//         <CardTitle>{title}</CardTitle>
//         <ImageCard src={cover} alt="Appartments" />
//       </Card>{' '}
//       <AppartmentChoice />
//     </Link>
//   )
// }

// export default Cards

// {/* <Card>
//         <ImageCard src={photoTitre}></ImageCard>
//       </Card> */}

//  onClick={()=>{ ;<Routes>
//         <Route path="/" element={<Propos />} />
//       </Routes>}

//       }
// onclick={() =>
// return (
//   <AppartmentChoice
// )}
