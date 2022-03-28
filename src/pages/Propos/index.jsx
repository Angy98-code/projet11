import styled from 'styled-components'
//import Chevron from 'react-chevron'
//import ChevronDisplay from '../../components/Collapse'
import CollapseAPropos from '../../components/CollapseAPropos'
import { TitleImage } from '../Home'
import photoTitre from '../../assets/photoTitre.jpg'
import Footer from '../../components/Footer'

const DivPhotoStyled = styled.div`
  max-width: 100%;
  margin-top: 10px;
  height: 223px;
  background-color: rgba(220, 220, 220, 0.3);
  border-radius: 25px;
  margin-left: 80px;
  margin-right: 80px;
  @media (max-width: 875px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
const CollapseBlocStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 160px;
  margin-right: 160px;
  margin-bottom: 30px;
  column-gap: 50px;
  @media (max-width: 875px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
const DivBlocPropos = styled.div``

function Propos() {
  return (
    <DivBlocPropos>
      <DivPhotoStyled>
        <TitleImage src={photoTitre}></TitleImage>
      </DivPhotoStyled>

      <CollapseBlocStyled>
        <CollapseAPropos
          title="Fiabilité"
          key="Fiabilité"
          content={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
          }
        />
      </CollapseBlocStyled>

      <CollapseBlocStyled>
        <CollapseAPropos
          title="Respect"
          key="Respect"
          content={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
        />
      </CollapseBlocStyled>

      <CollapseBlocStyled>
        <CollapseAPropos
          title="Service"
          key="Service"
          content={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
      </CollapseBlocStyled>

      <CollapseBlocStyled>
        <CollapseAPropos
          title="Sécurité"
          key="Sécurité"
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </CollapseBlocStyled>
      <Footer />
    </DivBlocPropos>
  )
}
export default Propos

// const DivFiabiliteParent = styled.div`
//   position: relative;
//   top: -6px;
//   margin-left: 160px;
//   margin-right: 160px;
//   margin-top: 40px;

//   border-radius: 10px;
//   background-color: rgba(220, 220, 220, 0.3);
// `
// const DivFiabilite = styled.div`
//   z-index: 1;
//   background-color: #ff6060;
//   height: 53px;
//   border-radius: 10px;
//   color: #ffffff;
//   display: flex;
//   justify-content: space-between;
//   padding-right : 15px;
//   align-items: center;
//   padding-left: 15px;
//   font-size: 18px;
// `
