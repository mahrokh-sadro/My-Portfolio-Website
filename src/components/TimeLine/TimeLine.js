import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';




const Timeline = () => {
 
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      My name is Mahrokh. I am a web programmer. Welcome to my web site!
      </SectionText>
      </Section>
  );
};

export default Timeline;
