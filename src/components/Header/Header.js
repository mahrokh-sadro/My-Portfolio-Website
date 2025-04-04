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
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        {/* <Link href="#projects">
          <NavLink>
          Projects
          </NavLink>
        </Link> */}
        <Link
          href="#tech"
          style={{
            display: "inline",
            fontSize: "2rem",
            lineHeight: "32px",
            color: "rgba(255, 255, 255, 0.75)",
            transition: "0.4s ease",
            textDecoration: "none",
          }}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="#tech"
          style={{
            display: "inline",
            fontSize: "2rem",
            lineHeight: "32px",
            color: "rgba(255, 255, 255, 0.75)",
            transition: "0.4s ease",
            textDecoration: "none",
          }}
        >
          Technologies
        </Link>
      </li>
      <li>
        <Link
          href="#about"
          style={{
            display: "inline",
            fontSize: "2rem",
            lineHeight: "32px",
            color: "rgba(255, 255, 255, 0.75)",
            transition: "0.4s ease",
            textDecoration: "none",
          }}
        >
          About
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
      <SocialIcons href="mailto:mahrokh.sdr@gmail.com">
        <AiFillYahoo size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
