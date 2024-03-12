import React from "react";
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quote from '../Quote';
import Arrow from '../../../Arrow/Arrow';
import ImageCard from './ImageCard'; // requires a loader

function SliderCard({title, subtitle, numbers, prefix, sufix, text, quoteText, quoteAuthor, image, cardTitle, cardText, cardHref, themeColor, numbersGrid}) {

  const gradient = `linear-gradient(to bottom right, transparent 50%, ${themeColor} 50%) no-repeat, linear-gradient(to top left, transparent 0.1%, ${themeColor} 0.1%) no-repeat`;
  const bgSize = '10% 100%, 90.2% 100%';
  const bgPosition = '0% 0%, 100% 0%';
  return (
   <div className={"card-container"}>
     <div className={"flex flex-wrap"}>
       <div className={"card-col-left col-lg-6 col-sm-12"}>
         <div className={"title"}>{title}</div>
         {!numbers && (
           <div className={"numbers-grid"}>
             {numbersGrid.map(item => {
               return (
                 <div className={"col-6"}>
                   <div className={"grid-number"} style={{color: themeColor}}>{item.number}</div>
                   <div className={"grid-label"}>{item.label}</div>
                 </div>
               )
             })}
           </div>
         )}
         {numbers && <div className={"numbers"} style={{color: themeColor}}>
           {prefix && <span>{prefix}</span>}
           {numbers}
           {sufix && <span>{sufix}</span>}
         </div>}
         {subtitle && <div className={"subtitle"}>{subtitle}</div>}
         <p>{text}</p>
       </div>
       <div className={"card-col-right col-lg-6 col-sm-12"}>
         <Quote
           quote={quoteText}
           author={quoteAuthor}
           textColor={"#191919"}
           borderColor={themeColor}
         />
         <ImageCard image={image} cardHref={cardHref} cardTitle={cardTitle} cardText={cardText} themeColor={themeColor} />
       </div>
     </div>
   </div>
  );

}

export default SliderCard;
