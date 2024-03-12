import React from "react";
import "./_NumbersContent.scss";

class NumbersContent extends React.Component {
  renderItem = item => {
    const { percentageNumber, percentageText } = item;
    const reduceSigns = ["%", "#", "*", "&", "x", "X"];
    let percentageNumberHtml = "";

    for (var i = 0; i < percentageNumber.length; i++) {
      if (reduceSigns.includes(percentageNumber[i])) {
        percentageNumberHtml +=
          "<span class='number-sign'>" +
          percentageNumber[i].toLowerCase() +
          "</span>";
      } else {
        percentageNumberHtml += percentageNumber[i];
      }
    }
    return (
      <div className="number-box">
        <h3
          className="number"
          dangerouslySetInnerHTML={{ __html: percentageNumberHtml }}
        ></h3>
        <p className="number-percentage">{percentageText}</p>
      </div>
    );
  };
  render() {
    const { items } = this.props;
    return (
      <div className="numbers-content">
        <div className="container numbers-content-container">
          {items.map(item => item.percentageNumber && this.renderItem(item))}
        </div>
      </div>
    );
  }
}

export default NumbersContent;
