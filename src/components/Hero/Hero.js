import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To<br />
     My Personal Portfolio
     </SectionTitle>
      <SectionText>
        My name is Mahrokh Sadro. I am a computer programmer. Welcome to my website!
   </SectionText>
   <Button onClick={()=>window.location.href='#about'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;