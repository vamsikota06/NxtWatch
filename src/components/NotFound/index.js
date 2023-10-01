import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundImage,
  Heading,
  Para,
} from './styledComponent'

import Navbar from '../Navbar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const imageUrl = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Navbar />
          <NotFoundContainer isLightTheme={isLightTheme}>
            <NotFoundImage src={imageUrl} alt="" />
            <Heading isLightTheme={isLightTheme}>Page Not Found</Heading>
            <Para isLightTheme={isLightTheme}>
              We are sorry, the page you requested could not be found.
            </Para>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
