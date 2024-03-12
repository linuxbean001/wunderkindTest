import React, {useState} from "react";
import "./styles.scss";
import Quote from '../Quote';
import { useStaticQuery, graphql } from "gatsby";
function Identity(props) {



  const query = useStaticQuery(
    graphql`
    query HowItWorksIdentity {
      wordPress {
        hPage(id: "aC1wYWdlOjY1Mjg=") {
          howItWorksEcomm {
            identitymainheader
            identitydescription
            identitydescription2
            identitytoggleimagedescription
            identitytoggleimagedescription2
            identityquote
            identityquoteauthor
            identityquoteauthorposition
            identityquoteimage{
              sourceUrl
            }
          }
        }
      }
    }
    `
    )

  const content = query.wordPress.hPage.howItWorksEcomm
  console.log('content', content)




  const [isToggleChecked, setToggleChecked] = useState(false);
  return (
    <section
      className={
        "how-it-works-identity"
      }
    >
      <div className={"arrow-icon"}>
        <img className={"image-arrow"} src={"/images/how-it-works/arrow-icon.svg"} />
      </div>
      <div className="container">
        <div className={"row"}>
          <div className={"col-lg-5 col-sm-12"}>
            <h2>{content.identitymainheader}</h2>
            <p>
              {content.identitydescription}
            </p>
            <p>
              {content.identitydescription2}
            </p>
          </div>
          <div className={"col-1"} />
          <div className={"col-lg-6 col-sm-10 laptop-image"}>
            <img alt="" src={isToggleChecked ? "/images/how-it-works/laptop1.png" : "/images/how-it-works/laptop.png"} />
            <div className={"how-it-works-toggle"}>
              <span className={isToggleChecked ? "" : "active"}>{"current"}</span>
              <label className="switch">
                <input type="checkbox" onChange={(e) => {setToggleChecked(e.target.checked)}} />
                <span className="slider round" />
              </label>
              <span className={isToggleChecked ? "active" : ""}>{"wunderkind"}</span>
            </div>
            <p className={"info-text"}>
              { isToggleChecked
                ? content.identitytoggleimagedescription
                : content.identitytoggleimagedescription2
              }
            </p>
          </div>
        </div>
        <div className={"quote-section row"}>
          <div className={"col-lg-6 col-sm-12"}>
            <Quote
              quote={content.identityquote}
              author={content.identityquoteauthor}
              authorPosition={content.identityquoteauthorposition}
            />
          </div>
          <div className={"col-lg-6 col-sm-12"}>
            <div className={"image-container"}>
              <img alt="" src={content.identityquoteimage.sourceUrl}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Identity;
