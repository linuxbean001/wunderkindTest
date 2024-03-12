import React from "react";
import { AvatarCard } from "../AvatarCard/AvatarCard";
import "./_Participants.scss";

const Participants = ({ sectionTitle, participantsInfo }) => {
  const title = sectionTitle || "Featured in this Episode:";
  return (
    <section className="participants-section">
      <h1 className="participants-section-title">{title}</h1>
      <ul className="participants-section-list">
        {participantsInfo.map((participant, index) => (
          <li key={index}>
            <AvatarCard participant={participant} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Participants;
