import React from "react"
import './Video.scss'
const Video = ({videoSrcURL, videoTitle, ...props}) => (
    <div className="video">
        <iframe
            className="frame-styles"
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
)

export default Video