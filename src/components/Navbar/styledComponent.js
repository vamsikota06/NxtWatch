import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const NavImage = styled.img`
  width: 100px;
`

export const NavUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  width: 160px;
  height: 100%;
  margin: 0;
`
export const IconButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
