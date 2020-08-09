import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../theme';

import landing from '../../content/landing.json';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
`;

const Main = styled.div`
  background-color: ${colors.brand};
  padding: 114px 114px;
`;

const Title = styled.h1`
  font-family: 'Aceh Soft Black';
  font-size: 57px;
  letter-spacing: -0.2px;
  color: ${colors.highlight};
  margin-bottom: 80px;
  max-width: 708px;
`;

const Description = styled.h3`
  font-family: 'Aceh Soft Medium';
  font-size: 38px;
  color: ${colors.highlight};
`;

const Nav = styled.nav`
  padding: 50px;
  background-color: ${colors.background};
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

const IndexPage = () => (
  <Wrapper>
    <Main>
      <Title>{landing.title}</Title>
      <Description>
        {landing.description[0]}
        <br></br>
        <br></br>
        {landing.description[1]}
      </Description>
    </Main>
    <Nav>
      <NavLink to="/recent-work">Recent Work</NavLink>
      <NavLink to="/less-recent-work">Less Recent Work</NavLink>
    </Nav>
  </Wrapper>
);

export default IndexPage;
