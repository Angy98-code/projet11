import styled from 'styled-components'

//size stars
const StyleStarrating = styled.div`
  font-size: 30px;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`
//use props
const Rating = ({stars}) => {
 // const n = parseInt(stars)
 //stard = props
  console.log('Rating',stars)

  return (
    <StyleStarrating>
      {[...Array(parseInt(stars))].map((star, index) => {
        return (
          <span className="star" key={index}>
            &#9733;
          </span>
        )
      })}
    </StyleStarrating>
  )
}
export default Rating
