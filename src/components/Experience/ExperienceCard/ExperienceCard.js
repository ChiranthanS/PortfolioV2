import React from "react";
import { ExperienceList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
} from "./ExperienceCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function ExperienceCard() {
    return (
      <>
        {ExperienceList.map((list, index) => (
          <ScrollAnimation animateIn="fadeInLeft" key={index}>
            <Card>
              <CardLeft>
                <img src={list.img} alt={list.name} />
              </CardLeft>
              <CardRight>
                <h4>{list.title}</h4>
                <h1>{list.startDate} to {list.endDate}</h1>
                <p>{list.description}</p>
                <TechCardContainer>
                  {list.tech_stack.map((tech, index) => (
                    <TechCard key={index}>{tech}</TechCard>
                  ))}
                </TechCardContainer>
              </CardRight>
            </Card>
          </ScrollAnimation>
        ))}
      </>
    );
  }
  
//   export default ExperienceCard;
  
export default ExperienceCard;
