import { graphql } from 'gatsby'
import React from 'react'
import MainLayout from '../layouts/Main.jsx'
import '../template-styles/video.scss'
function VideoTemplate({ pageContext }) {
    const { videoTitle, videoSrc } = pageContext;
  
    return (
        <MainLayout>
          <div className="video-container">
            <h1 className='video-title'>{videoTitle}</h1>
            <iframe 
            className='iframe' 
            src={videoSrc}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            frameBorder="0"
            allowFullScreen 
            />
          </div>
        </MainLayout>
      );
  
  }

export default VideoTemplate