import React from 'react';
import Arrow from '../../../../Arrow/Arrow';
import "./_WatchNext.scss";

function WatchNext({ watchNextData }) {
  return (
    <div className="watch-next-wrapper">
      <section className="container">
        <h2 className='watch-next-header'>What to watch next</h2>
        <div className="watch-next-card-container">
        {watchNextData.map((item, index) => (
          <div className='watch-next-card' key={index}>
            <a className='watch-next-card-link' href={item.cardhref} target="_blank">
            <img className='watch-next-card-image' src={item.cardimage.sourceUrl} alt="" />
            <h3 className='watch-next-card-header'>{item.cardHeader}</h3>
            <p className='watch-next-card-description'>{item.carddescription}</p>
            <Arrow />
            </a>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}

export default WatchNext;
