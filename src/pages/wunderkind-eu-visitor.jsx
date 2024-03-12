import React from 'react'
import Intro from '../Components/General/Intro/Intro'
import WKLogo from '../../static/images/logo-white.svg'
function wunderkindEUVisitor(index) {
  return (
    <div className='container'>
          <img style={{marginTop: 60, marginLeft: 16}} src={WKLogo} alt="Logo" />

        <Intro
          key={"section-" + index}
          className="general_intro"
          colClass="col-md-8"
          content={{
            sideHeading: 'EU Trademark Law',
            title: `Visitors from the European Union`,
            subtitle: `Due to an EU trademark ruling, this website is currently not available to traffic from the European Union. At this time, we are operating under a different brand name in Europe.`,
          }}
          >
        </Intro>
          </div>
  )
}

export default wunderkindEUVisitor