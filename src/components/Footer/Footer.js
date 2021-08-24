import React from 'react';
import { AiFillGithub, AiFillYahoo, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mahrokh_sadr@yahoo.com">
          mahrokh_sadr@yahoo.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>LINKEDIN</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/mahrokh-sadro-413bb2211/">Let's connect on LinkedIn
</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>                        </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/mahrokh-sadro?tab=repositories">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:mahrokh_sadr@yahoo.com">
            <AiFillYahoo size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};


export default Footer;
