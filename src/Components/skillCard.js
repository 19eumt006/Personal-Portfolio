import React from "react";
import '../Styles/skillcard.css';

const SkillCard = (props) => {
  return (
    <div className="skillcard">
      <div className="skillcard-image">
        <img src={props.image} alt={props.title} draggable="false" />
      </div>
      <div className="skillcard-content">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
