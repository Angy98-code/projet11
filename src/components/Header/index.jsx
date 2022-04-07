import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const StyledLink = styled(Link)`
  padding-left: 15px;
  color: #ff6060;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  &:hover {
    text-decoration: underline;
    color: #ff6060;
  }
  @media (min-width: 450px) {
    font-size: 24px;
    padding-left: 30px;
  }
  @media (max-width: 450px) {
    text-transform: uppercase;
    font-size : 12px;
  }
`

const HomeLogo = styled.img`
  height: 35px;
  @media (min-width: 450px) {
    height: 50px;
  }
`

const NavContainerStyled = styled.nav`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 876px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`
//!!!!!!!!!!!!!!!!!!!
const NavStyled = styled.div`
  display: flex;
  justify-content: center;
`
const LinkStyled = styled(Link)``

function Header() {
  return (
    <NavContainerStyled>
      <LinkStyled to="/">
        <HomeLogo src={Logo} />
      </LinkStyled>
      <NavStyled>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/propos">A Propos</StyledLink>
      </NavStyled>
    </NavContainerStyled>
  )
}

export default Header
