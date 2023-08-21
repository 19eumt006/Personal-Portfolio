import React from 'react'
import styled from "styled-components";
import ExperienceCard from './experienceCard';

function Experience() {
  return (
    <Container>
        <h1>Experience</h1>
        <ExperienceCard></ExperienceCard>
    </Container>
  )
}

const Container = styled.section`
padding-left: 100px;

`;
export default Experience