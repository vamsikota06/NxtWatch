import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginForm,
  Logo,
  Label,
  Input,
  CheckboxContainer,
  PasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showPassword: false}

  onSuccessResponse = data => {
    Cookies.set('jwt_token', data.jwt_token, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  onFailureResponse = data => {
    this.setState({errorMsg: `*${data.error_msg}`})
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessResponse(data)
    } else {
      this.onFailureResponse(data)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {errorMsg, showPassword} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          const imageUrl = isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <LoginContainer isLightTheme={isLightTheme}>
              <LoginForm
                isLightTheme={isLightTheme}
                onSubmit={this.onClickSubmit}
              >
                <Logo src={imageUrl} alt="" />
                <Label htmlFor="userName" isLightTheme={isLightTheme}>
                  USERNAME
                </Label>
                <Input
                  onChange={this.onChangeUsername}
                  id="userName"
                  placeholder="Username"
                  isLightTheme={isLightTheme}
                />
                <Label htmlFor="password" isLightTheme={isLightTheme}>
                  PASSWORD
                </Label>
                <Input
                  onChange={this.onChangePassword}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  isLightTheme={isLightTheme}
                />
                <CheckboxContainer>
                  <input
                    onChange={this.onClickShowPassword}
                    id="checkbox"
                    type="checkbox"
                  />
                  <PasswordLabel htmlFor="checkbox" isLightTheme={isLightTheme}>
                    Show Password
                  </PasswordLabel>
                </CheckboxContainer>
                <LoginButton>Login</LoginButton>
                <ErrorMsg>{errorMsg}</ErrorMsg>
              </LoginForm>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
