import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {RiSunFill} from 'react-icons/ri'

import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {NavContainer, NavImage, NavUl, IconButton} from './styledComponent'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme, toggleTheme} = value

        const imageUrl = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        const themeIcon = isLightTheme ? (
          <FaMoon size={30} />
        ) : (
          <RiSunFill size={30} color="#f9f9f9" />
        )

        return (
          <NavContainer isLightTheme={isLightTheme}>
            <Link to="/">
              <NavImage src={imageUrl} alt="" />
            </Link>
            <NavUl>
              <li>
                <IconButton onClick={() => toggleTheme()} type="button">
                  {themeIcon}
                </IconButton>
              </li>
              <li>
                <IconButton type="button">
                  <GiHamburgerMenu
                    size={30}
                    color={isLightTheme ? '#181818' : '#f9f9f9'}
                  />
                </IconButton>
              </li>
              <li>
                <IconButton onClick={onClickLogout} type="button">
                  <FiLogOut
                    size={30}
                    color={isLightTheme ? '#181818' : '#f9f9f9'}
                  />
                </IconButton>
              </li>
            </NavUl>
          </NavContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Navbar)
