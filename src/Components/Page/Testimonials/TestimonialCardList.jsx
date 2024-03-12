import React, { useEffect } from "react";
import TestimonialCard from "Components/Page/Testimonials/TestimonialCard";
// import "./_CardList.scss";
import { getResourceUrlPath } from "../../../utils/common";

const cardTypes = [
  {
    type: "case-study",
    color: "#F5EBE1",
    dark: false,
  },
];

function TestimonialCardList(props) {
  const { testimonialCardListData, lang } = props;

  useEffect(() => {}, [testimonialCardListData]); // <-- here put the parameter to listen

  let listRender = [];

  try {
    listRender = testimonialCardListData.map(e => <TestimonialCard data={e} />);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <section className="cards">
        <div className="container">
          <div className="row">{listRender}</div>
        </div>
      </section>
    </>
  );
}

export default TestimonialCardList;
