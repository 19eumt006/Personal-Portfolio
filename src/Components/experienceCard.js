import React from 'react'
import styled from "styled-components";
import vuramlogo from "../Elements/vuram-logo.png"

function ExperienceCard() {
  return (
    <Container>
        <div className="expDetails">
          <div>
            <img src ={vuramlogo} ></img>
          </div>
          <div>
            <h1>WNS Vuram Technology Solutions</h1>
            <h2>Appian Developer - Intern (Associate Technical Consultant)</h2>
          </div>
        </div>
        <div className="duration">
          <h1>5 Months</h1>
          <h2>Duration</h2>
        </div>
    </Container>
  )
}
const Container = styled.section`
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    width: 95%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.1);
    padding: 24px 24px 24px 24px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: pointer;
    
    .expDetails{
      display: flex;
      justify-content: space-between;
      gap: 45px;
    }
`;
export default ExperienceCard