import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 18px;
  background-color: ${props => (props.isLightTheme ? 'white' : '#212121')};

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.isLightTheme && '0px 4px 16px 0px #cccccc'};
  width: 100%;
  padding: 18px;
  border-radius: 10px;
  background-color: ${props => (props.isLightTheme ? 'white' : '#0f0f0f')};
`

export const Logo = styled.img`
  width: 100px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const Label = styled.label`
  margin-top: 25px;
  margin-bottom: 5px;
  color: ${props => (props.isLightTheme ? '#64748b' : 'white')};
  font-weight: bold;
  font-size: 14px;
`

export const Input = styled.input`
  font-size: 15px;
  height: 40px;
  padding-left: 15px;
  border-radius: 4px;
  outline: none;
  border: 1px #94a3b8 solid;
  background-color: ${props => !props.isLightTheme && '#0f0f0f'};
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`

export const PasswordLabel = styled.label`
  color: ${props => (props.isLightTheme ? '#1e293b' : 'white')};
  font-weight: 500;
`

export const LoginButton = styled.button`
  height: 40px;
  color: white;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: -5px;
  font-family: 'Roboto';
  font-size: 16px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
