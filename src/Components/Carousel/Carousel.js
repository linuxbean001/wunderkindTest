import React, { useState } from 'react';
import Image from "./../Image/Image";

import "./Carousel.scss";

export const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}

export const Carousel = ({children, isHidden}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
    return (
        <div className='carousel'>
            <div className='inner' style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className={`indicators ${isHidden && "d-none"}`}>
                <button aria-label='previous' className={`prev`} onClick={()=>{
                    updateIndex(activeIndex - 1);
                }}>
                    <Image src="/images/arrowLeftButton.png"></Image>
                </button>
                <button aria-label='next' className="next" onClick={()=>{
                    updateIndex(activeIndex + 1);
                }}>
                    <Image src="/images/arrowRightButton.png"></Image>
                </button>
            </div>
        </div>
    )
}

export default Carousel;