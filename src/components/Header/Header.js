import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYahoo } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        {/* <a> */}
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
        {/* </a> */}
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mahrokh-sadro?tab=repositories">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mahrokh-sadro-413bb2211/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:mahrokh_sadr@yahoo.com">
        <AiFillYahoo size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
