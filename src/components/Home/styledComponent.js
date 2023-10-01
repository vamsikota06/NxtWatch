import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`

export const AddContainer = styled.div`
  padding: 30px;
`

export const AddPara = styled.p`
  width: 240px;
  font-size: 22px;
`

export const GetItNowButton = styled.button`
  color: #1e293b;
  background: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #1e293b;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 150px;
`

export const VideoContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
  flex-basis: 50vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 15px;
  margin-bottom: 0;
  border: 1px #909090 solid;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`
export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: 1px black solid;
  padding-left: 15px;
  border: none;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const SearchButton = styled.button`
  width: 100px;
  height: 100%;
  border: none;
  border-left: 1px #909090 solid;
  cursor: pointer;
  outline: none;
`

export const VideosUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const NoVideosContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  font-family: 'Roboto';
`

export const NoVideosImg = styled.img`
  width: 90%;
`

export const NoVideoHeading = styled.h1`
  color: #1e293b;
  margin-bottom: 0;
`

export const NoVideoPara = styled.p`
  color: #64748b;
  font-weight: 500;
  font-size: 17px;
`

export const RetryButton = styled.button`
  color: white;
  background-color: #4f46e5;
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
`
