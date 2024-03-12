import React, { useEffect, useState } from "react";

const TabsComponent = props => {
  const {
    data,
    sectionClasses,
    tabClasses,
    contentClasses,
    innerContentClasses,
    activeClasses,
    activeTabChange,
  } = props;

  let tabs = null;
  let pageContainer = null;
  let isMobile = false;

  if (typeof window !== "undefined") {
    tabs = [...document.querySelectorAll(".tab-element")];
    pageContainer = document.querySelector(".content-wrapper");
    isMobile = window.innerWidth <= 760;
  }

  useEffect(() => {
    tabs.forEach((item, i) => {
      item.id === "0"
        ? item.classList.add(activeClasses)
        : item.classList.remove(activeClasses);
      item.addEventListener("click", () => {
        activeTabChange(item.id);

        tabs.find(tab => {
          tab.id === item.id
            ? tab.classList.add(activeClasses)
            : tab.classList.remove(activeClasses);
        });
        isMobile && (pageContainer.style.marginLeft = `-${i * 107}%`);
        !isMobile && (pageContainer.style.marginLeft = `-${i * 100}%`);
      });
    });
  }, [tabs]);

  return (
    <section className={`${sectionClasses} section-element`}>
      <div id="tabs" className="tabs">
        {data?.map((item, i) => {
          return (
            <p key={i} id={i} className={`${tabClasses} tab-element`}>
              {item.title}
            </p>
          );
        })}
      </div>
      <div className={`${contentClasses} content-wrapper`}>
        {data?.map((item, i) => {
          return (
            <div key={i} className={`${innerContentClasses}`}>
              {item.content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TabsComponent;
