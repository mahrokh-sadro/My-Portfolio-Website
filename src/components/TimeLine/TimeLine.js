import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi, I’m Mahrokh — a passionate Front-End Developer and Software
        Designer. I specialize in building elegant, user-focused web
        applications using React, Next.js, Tailwind CSS, and GraphQL. With a
        solid background in C++ and Java, I blend strong programming
        fundamentals with modern front-end technologies to create seamless
        digital experiences. From learning platforms to dynamic interfaces, my
        portfolio reflects a commitment to clean code, performance, and design.
        I love turning ideas into responsive, accessible products that users
        enjoy. Outside of tech, you’ll find me hiking in nature, experimenting
        with coffee brewing, or tuning into inspiring podcasts.
      </SectionText>
    </Section>
  );
};

export default Timeline;
