import React from "react";
import '../Styles/skills.css';
import SkillCard from "./skillCard";

const skillDetails = {
    skills: [
        {
            skillName: 'Java',
            imageUrl: 'https://www.pngplay.com/wp-content/uploads/9/Java-Transparent-PNG.png'
        },
        {
            skillName: 'MySQL',
            imageUrl: 'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png'
        },
        {
            skillName: 'Appian',
            imageUrl: 'https://pilbox.themuse.com/image.png?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fcompanies%2F706%2Fsmall_logo.png%3Fv%3D937d1a22a1ba2b87c5555c70f991a27a476106986dda243a22698afb1d2598fe&h=630&mode=fill&prog=1&w=1200'
        },
        {
            skillName: 'ReactJS',
            imageUrl: 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'
        },
        {
            skillName: 'HTML',
            imageUrl: 'https://banner2.cleanpng.com/20180802/tpl/kisspng-logo-html5-brand-clip-art-%E6%9D%89-%E5%B1%B1-%E8%89%AF-%E9%9B%84-5b62be01b565d5.334247781533197825743.jpg'
        },
        {
            skillName: 'CSS',
            imageUrl: 'https://png.pngitem.com/pimgs/s/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png'
        },
        {
            skillName: 'AWS',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png'
        },
        {
            skillName: 'Problem solving',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/8148/8148303.png'
        },
    ]
};  

const Skills=()=>{
    return(
        <div id="skills" className="skillsTitle"> 
            <div>
                <p>My Skills</p>
                <h1>My Expertise</h1>
            </div>
            <div className="skills">
                <SkillCard title= {skillDetails.skills[0].skillName} image={skillDetails.skills[0].imageUrl}></SkillCard>
                <SkillCard title={skillDetails.skills[1].skillName} image={skillDetails.skills[1].imageUrl}></SkillCard>
                <SkillCard title={skillDetails.skills[2].skillName} image={skillDetails.skills[2].imageUrl}></SkillCard>
                <SkillCard title={skillDetails.skills[3].skillName} image={skillDetails.skills[3].imageUrl}></SkillCard>
            </div>
            <div className="skills2">
                <SkillCard title= {skillDetails.skills[4].skillName} image={skillDetails.skills[4].imageUrl}></SkillCard>
                <SkillCard title={skillDetails.skills[5].skillName} image={skillDetails.skills[5].imageUrl}></SkillCard>
                <SkillCard title={skillDetails.skills[6].skillName} image={skillDetails.skills[6].imageUrl}></SkillCard>
                <SkillCard title={skillDetails.skills[7].skillName} image={skillDetails.skills[7].imageUrl}></SkillCard>
            </div>
        </div>

    )
}
export default Skills;