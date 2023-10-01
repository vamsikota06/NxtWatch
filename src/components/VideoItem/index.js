import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

import {
  VideoLi,
  ThumbnailImage,
  VideoDetailsContainer,
  Name,
  ProfileImage,
  Title,
  VideoDetails,
} from './styledComponent'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <Link to={`videos/${id}`} className="nav-link">
      <VideoLi>
        <ThumbnailImage src={thumbnailUrl} alt="" />
        <VideoDetailsContainer>
          <ProfileImage src={profileImageUrl} alt="" />
          <div>
            <Title>{title}</Title>
            <VideoDetails>
              <Name>{name}</Name>
              <BsDot />
              <p>{viewCount}</p>
              <BsDot />
              <p>{publishedAt}</p>
            </VideoDetails>
          </div>
        </VideoDetailsContainer>
      </VideoLi>
    </Link>
  )
}

export default VideoItem
