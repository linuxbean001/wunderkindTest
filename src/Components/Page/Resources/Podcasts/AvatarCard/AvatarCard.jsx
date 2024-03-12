import React from "react";
import Image from "../../../../Image/Image";
import LILogo from "../../../../../../static/images/logos/icon-linkedin-light.svg";
import "./_AvatarCard.scss";

export const AvatarCard = ({
  participant: {
    firstName,
    lastName,
    companyPosition,
    linkedinUrl,
    sourceUrl,
    altText,
  },
}) => {
  return (
    <a href={linkedinUrl} className="avatar relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={0}
        height={0}
        viewBox="0 0 258 282"
        fill="none"
        className="absolute"
      >
        <defs>
          <clipPath id="squareWithoutBorderBottomRight">
            <path
              d="M0 27C0 12.088 12.088 0 27 0h204c14.912 0 27 12.088 27 27v170c0 14.912-12.088 27-27 27h-4c-14.912 0-27 12.088-27 27v4c0 14.912-12.088 27-27 27H27c-14.912 0-27-12.088-27-27V27Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="relative avatar-container">
        <Image src={sourceUrl} alt={altText} className="avatar-image" />
        <div className="avatar-linkedin">
          <Image
            src={LILogo}
            alt="linkedin icon"
            className="avatar-linkedin-image"
          />
        </div>
      </div>
      <div className="text-black d-flex flex-col">
        <h5 className="avatar-name">
          {firstName} {lastName}
        </h5>
        <p className="avatar-company">{companyPosition}</p>
      </div>
    </a>
  );
};
