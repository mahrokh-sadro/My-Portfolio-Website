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
        My name is Mahrokh. I am a computer programmer. I'm so passionate about
        front-end development and software design. I love C++ and Java. My
        interests outside work include hiking, making coffee, and listening to
        podcasts.
      </SectionText>
    </Section>
  );
};

export default Timeline;
