import React, { useState, useEffect } from "react";
import "./LanguageSwitcher.scss";

function LanguageSwitcher(props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(getCurrentLanguage() !== "us" ? true : false);
  }, []);

  const getCurrentLanguage = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname.startsWith("/uk/") ? "uk" : "us";
    }
    return "us";
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="lang-switcher">
      <label className="lang-chk-container" htmlFor="lang">
        <input
          id="lang"
          className="lang-chk"
          name="lang"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <div className="lang-name lang-0">US</div>
        <a href={props.toggleHref}>
          <span aria-label="language check box" className="lang-chk-box"></span>
        </a>
        <div className="lang-name lang-1">UK</div>
      </label>
    </div>
  );
}

export default LanguageSwitcher;
