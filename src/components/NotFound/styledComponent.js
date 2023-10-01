import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Roboto';
  flex-basis: 100%;
  padding: 15px;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`

export const NotFoundImage = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#1e293b' : '#f9f9f9')};
`
export const Para = styled.p`
  color: ${props => (props.isLightTheme ? '#475569' : '#94a3b8')};
`
