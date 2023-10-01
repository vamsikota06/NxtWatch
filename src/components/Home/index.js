import {Component} from 'react'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoItem from '../VideoItem'

import Navbar from '../Navbar'

import {
  HomeContainer,
  AddContainer,
  AddPara,
  GetItNowButton,
  LogoContainer,
  Logo,
  VideoContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosUl,
  NoVideosContainer,
  NoVideosImg,
  NoVideoHeading,
  NoVideoPara,
  RetryButton,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    userInput: '',
    searchQuery: '',
  }

  componentDidMount() {
    this.sendHomeVideosRequest()
  }

  onRequestSuccess = data => {
    const {videos} = data
    const modifiedVideos = videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      viewCount: eachVideo.view_count,
      publishedAt: eachVideo.published_at,
    }))
    this.setState({
      videosList: modifiedVideos,
      apiStatus: apiStatusConstants.success,
    })
  }

  onRequestFailure = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  sendHomeVideosRequest = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchQuery} = this.state
    console.log('searchQuery', searchQuery)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onRequestSuccess(data)
    } else {
      this.onRequestFailure(data)
    }
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSearchIcon = () => {
    const {userInput} = this.state
    console.log(userInput)
    this.setState({searchQuery: userInput}, this.sendHomeVideosRequest)
  }

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <VideoContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isLightTheme ? 'black' : 'white'}
              height="50"
              width="50"
            />
          </VideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    const totalVideos = videosList.length

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <>
              {totalVideos === 0 ? (
                <NoVideosContainer isLightTheme={isLightTheme}>
                  <NoVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <NoVideoHeading>No Search results found</NoVideoHeading>
                  <NoVideoPara>
                    Try different key words or remove search filter
                  </NoVideoPara>
                  <RetryButton type="button">Retry</RetryButton>
                </NoVideosContainer>
              ) : (
                <VideosUl>
                  {videosList.map(eachVideo => (
                    <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
                  ))}
                </VideosUl>
              )}
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => {}

  render() {
    const {apiStatus} = this.state

    let responseView
    switch (apiStatus) {
      case 'LOADING':
        responseView = this.renderLoadingView()
        break
      case 'SUCCESS':
        responseView = this.renderSuccessView()
        break
      case 'FAILURE':
        responseView = this.renderFailureView()
        break
      default:
        responseView = null
    }

    return (
      <HomeContainer>
        <Navbar />
        <AddContainer>
          <LogoContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <button type="button">
              <AiOutlineClose />
            </button>
          </LogoContainer>
          <AddPara>Buy Nxt Watch Premium prepaid plans with UPI</AddPara>
          <GetItNowButton type="button">GET IT NOW</GetItNowButton>
        </AddContainer>

        <NxtWatchContext.Consumer>
          {value => {
            const {isLightTheme} = value

            return (
              <>
                <VideoContainer isLightTheme={isLightTheme}>
                  <SearchContainer>
                    <SearchInput
                      onChange={this.onChangeUserInput}
                      type="search"
                      placeholder="Search"
                      isLightTheme={isLightTheme}
                    />
                    <SearchButton
                      onClick={this.onClickSearchIcon}
                      type="button"
                    >
                      <AiOutlineSearch />
                    </SearchButton>
                  </SearchContainer>
                  {responseView}
                </VideoContainer>
              </>
            )
          }}
        </NxtWatchContext.Consumer>
      </HomeContainer>
    )
  }
}

export default Home
