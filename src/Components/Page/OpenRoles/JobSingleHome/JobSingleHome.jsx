import React from "react";
import axios from "axios";
import "./_JobSingleHome.scss";
import MainLayout from "../../../../layouts/Main";

//General Components
import Intro from "Components/General/Intro/Intro";
import Divider from "Components/General/Divider/Divider";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import JobForm from "../JobForm/JobForm";
import Process from "../../../General/Process/Process";
import SideHtmlTextContent from "Components/General/SideHtmlTextContent/SideHtmlTextContent";

class JobSingleHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: {
        metadata: [
          {},
          {
            value: [],
          },
        ],
      },
      isLoaded: false,
    };
  }

  htmlDecode(input) {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  componentDidMount() {
    axios
      .get(
        `https://api.greenhouse.io/v1/boards/wunderkind/jobs/` +
          this.props.openJobId
      )
      .then(res => {
        const currentJob = res.data;
        this.setState({
          currentJob: currentJob,
          isLoaded: true,
        });
      });
  }

  render() {
    const { currentJob, isLoaded } = this.state;
    let {
      getADemoSection,
      processBlockSection,
    } = this.props.pageData.pageDefaultData;

    if (!isLoaded) {
      return null;
    }

    return (
      <MainLayout
        mainClass="open-roles"
        headerPattern="/images/patterns/pattern-12.svg"
        footerPattern="/images/patterns/pattern-12.svg"
        seoMeta={{
          title: `${currentJob.title} | Wunderkind`,
          metaDesc: `${currentJob.title}`,
        }}
      >
        <Intro
          content={{
            sideHeading: "Job Description",
            title: currentJob.title,
            subtitle:
              currentJob.metadata[0].value +
              currentJob.metadata[1].value.map(jobLocation => {
                return " | " + jobLocation;
              }),
            button: {
              label: "Apply Now",
              link: "#job-form",
              scrollTo: true,
            },
          }}
          backArrow={{
            className: "back-btn back-job",
            href: "/open-roles/",
            dark: true,
          }}
          lang={this.props.lang}
        ></Intro>

        {currentJob.metadata[2].value !== null && (
          <SideHtmlTextContent
            content={`
                            <div class="content-size-xl">${currentJob.metadata[2].value}</div>
                        `}
            firstCol="col-lg-12"
            secondCol="col-lg-9"
          ></SideHtmlTextContent>
        )}

        <SideHtmlTextContent
          content={this.htmlDecode(currentJob.content)}
          firstCol="col-xl-6"
          secondCol="col-xl-6"
          className="side-no-padding"
        ></SideHtmlTextContent>

        <Divider bgColor="#F5EBE1" maskColor="#191919" />

        <JobForm
          key={"job-form-" + this.props.openJobId}
          path={"/" + this.props.openJobId}
          currentJob={currentJob}
          lang={this.props.lang}
        ></JobForm>

        <Divider
          bgColor="#191919"
          maskColor="#F5EBE1"
          className="bottom-right"
        />

        <Process
          title={processBlockSection.title}
          steps={processBlockSection.steps}
        />

        <RequestDemo
          content={{
            title: getADemoSection.title,
            subtitle: getADemoSection.subTitle,
            button: {
              label: getADemoSection.ctaGroup && getADemoSection.ctaGroup.text,
              link: getADemoSection.ctaGroup && getADemoSection.ctaGroup.url,
              className: "btn-dark",
            },
            image: getADemoSection.image && getADemoSection.image.sourceUrl,
          }}
          maskColor="#191919"
          bgColor={getADemoSection.bgColor}
          lang={this.props.lang}
        />
      </MainLayout>
    );
  }
}

export default JobSingleHome;
