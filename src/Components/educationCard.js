import React from "react";
import '../Styles/educationCard.css'
const EducationCard = ({props}) => {
    return(
        <div className="fullCard">
            <div className="Educationcard">
            <div>
                <img src={props.imageUrl} alt= {props.alt}></img>
            </div>
            <div>
                <h1>{props.InstituteName}</h1>
                <h2>{props.course} | {props.year}</h2>
            </div>
            
            </div>
            <div className="grade">
                <h1>{props.Grade}</h1>
            </div>
        </div>
        
    )
}
export default EducationCard;