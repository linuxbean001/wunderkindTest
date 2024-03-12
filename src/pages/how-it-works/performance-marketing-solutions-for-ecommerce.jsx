import React from 'react';
import MainLayout from '../../layouts/Main';
import HowItWorksWrapper from '../../Components/Page/HowItWorks';
import {Helmet} from "react-helmet";

function HowItWorksEcommerce(props) {
  return (
    <MainLayout
    lang={"us"}
    languages={["us", "uk"]}
    className={"mask5"}
    defaultStickyMenu={true}
    {...props}
    >
      <Helmet>
        <title>eCommerce Performance Marketing Solutions | Wunderkind</title>
        <link rel="canonical" href="https://www.wunderkind.co/how-it-works/performance-marketing-solutions-for-ecommerce/" />
        <meta
          name="description"
          content="Grow your eCommerce revenue with Wunderkind's performance marketing solutions. Scale your online business with our email and text marketing strategies."
        />
      </Helmet>
      <HowItWorksWrapper />
    </MainLayout>
  );
}

export default HowItWorksEcommerce;