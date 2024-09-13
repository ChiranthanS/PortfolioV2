import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Chiranthan Shadaksharaswamy</strong> , a Software Engineer specializing in full-stack development, DevOps, and cloud/infrastructure. 
            With ~3 years of experience across diverse roles, I have a proven ability to optimize system performance, reduce costs, and create data-driven solutions. My expertise spans Python, React, Django, and cloud platforms like AWS and GCP, where I've designed scalable, high-availability systems.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I’ve worked on a variety of impactful projects, including building AI-driven applications, creating shipment tracking platforms, and developing machine learning models. 
            My experience at Harman International (SAMSUNG) and as a consultant at Hoosier Community Network has honed my skills in architecting efficient, resilient systems while enhancing user engagement.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I am passionate about solving complex problems and am constantly exploring new technologies, especially in web development and Cloud Engineering. Let's build something incredible together!
            
            <br /><br />
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
