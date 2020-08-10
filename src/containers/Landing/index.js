import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../theme';
import landing from '../../content/landing.json';

import LinkedIn from '../../components/svg/LinkedIn';
import Github from '../../components/svg/Github';

const flareSrc = require('../../content/images/flare_landing.png');
const flareInner = require('../../content/images/flare_inner.png');
// const flareMiddle = require('../../content/images/flare_middle.png');
// const flareOuter = require('../../content/images/flare_outer.png');

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
`;

const Main = styled.div`
  background-color: ${colors.brand};
  position: relative;
`;

const ExternalNav = styled.ul`
  padding: 47px 68px 0 29px;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

const TextWrapper = styled.article`
  padding: 0 114px 114px;
`;

const Title = styled.h1`
  font-family: 'Aceh Soft Black';
  font-size: 57px;
  letter-spacing: -0.2px;
  color: ${colors.highlight};
  margin-bottom: 80px;
  max-width: 708px;
  position: relative;
`;

const Description = styled.h3`
  font-family: 'Aceh Soft Medium';
  font-size: 38px;
  color: ${colors.highlight};
  max-width: 1024px;
  position: relative;
`;

const Nav = styled.nav`
  padding: 50px;
  background-color: ${colors.background};
  position: relative;
`;

const NavLink = styled(Link)`
  font-family: 'Aceh Soft Extra Bold';
  font-size: 38px;
  color: ${colors.brand};
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 12%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Flare = styled.img`
  width: 55vw;
  min-width: 375px;
  max-width: 800px;
  max-height: 95%;
  position: absolute;
  top: 0;
  right: 0;
  /* opacity: 0;
  animation: ${fadeIn} 0.4s 0.35s ease-in-out forwards; */
`;

// const FlareInner = styled.img`
//   width: 25vw;
//   min-width: 175px;
//   max-width: 300px;
//   /* max-height: 45%; */
//   position: absolute;
//   top: 0;
//   right: 0;
//   opacity: 0;
//   animation: ${fadeIn} 0.4s 0.5s ease-in-out forwards;
// `;

const IndexPage = () => (
  <Wrapper>
    <Main>
      <Flare src={flareSrc} />
      {/* <FlareInner src={flareInner} /> */}
      <ExternalNav>
        <Li>
          <a href="https://www.linkedin.com/in/kitmasaracchia/" target="_blank">
            <LinkedIn />
          </a>
        </Li>
        <Li>
          <a href="https://github.com/noblepaper" target="_blank">
            <Github />
          </a>
        </Li>
      </ExternalNav>
      <TextWrapper>
        <Title>{landing.title}</Title>
        <Description>
          {landing.description[0]}
          <br></br>
          <br></br>
          {landing.description[1]}
        </Description>
      </TextWrapper>
    </Main>
    <Nav>
      <NavLink to="/recent-work">Recent Work</NavLink>
      <NavLink to="/less-recent-work">Less Recent Work</NavLink>
    </Nav>
  </Wrapper>
);

export default IndexPage;
