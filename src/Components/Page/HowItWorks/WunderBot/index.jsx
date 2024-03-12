import React from 'react'
import './styles.scss'

function WunderBot() {
  return (
    <div className="bot-wrapper">
        <div className="bot-container">
            <div style={{width: '100%', height: '600px'}}>
                <iframe 
                width="100%" 
                height="100%" 
                style={{border: 'none'}}
                src="https://wiseox.ai/mascot/658dc68e0a96ca0027417f02"
                ></iframe>
            </div>  
        </div>
    </div>
  )
}

export default WunderBot