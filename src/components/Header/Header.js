"use client"

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 1rem;
  background: linear-gradient(45deg, #4B3E2F, #7D6752, #4B3E2F);
  border-top: .25rem groove var(--color-sepia);
  border-bottom: .35rem groove var(--color-sepia);
  `;

const Logo = styled.h1`
  color: var(--color-faded-black);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .05rem;
  text-shadow: -1px 0 2px var(--color-off-white),
                -2px -2px 0 var(--color-muted-red),
                2px 2px 0 var(--color-muted-blue),
                2px 0 3px var(--color-off-white);
  @media (max-width: 768px){

  }
`;

const NavList = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

const NavItem = styled.li`
  display: flex;
  flex: 1;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  border: 3px groove var(--color-sepia);
  border-radius: .5rem;
  display: flex;
  flex: 1;
  padding: .25rem;
  margin: 0 .25rem;
  width: calc(100% - 1rem);
  justify-content: center;
  align-items: center;
  color: var(--color-faded-black);
  background: linear-gradient(45deg, #4B3E2F, #7D6752, #4B3E2F);
  font-weight: 700;
  text-decoration: none;
  text-shadow: -1px 0 2px var(--color-off-white),
              -2px -2px 0 var(--color-muted-red),
              2px 2px 0 var(--color-muted-blue),
              2px 0 3px var(--color-off-white);
  box-shadow: -1px -1px 1px var(--color-muted-red),
              1px 1px 1px var(--color-muted-blue),
              -2px -2px 3px var(--color-off-white),
              3px 3px 3px var(--color-faded-black);

  &:hover {
    background: linear-gradient(45deg,
      var(--color-off-white),
      var(--color-muted-blue),
      var(--color-sepia),
      var(--color-muted-red),
      var(--color-off-white)
    );
    color: var(--color-off-white);
    text-shadow: 0 0 6px var(--color-faded-black);
    box-shadow: 0 0 5px var(--color-off-white);
    border: 2px solid var(--color-off-white);
    transform: scale(1.1);
  }

  &:active {
    border: 3px groove var(--color-sepia);
    background: linear-gradient(45deg, var(--color-sepia), var(--color-muted-red));
    color: var(--color-muted-red);
  }
`

const Header =()=> {


  return (
    <HeaderContainer>
      <Logo>Francis Craven</Logo>
      <NavList>

        <NavItem>
          <StyledLink href="/">Home</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink href="/portfolio">Portfolio</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink href="/about">About</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink href="/contact">Contact</StyledLink>
        </NavItem>

      </NavList>
    </HeaderContainer>
  )
}

export default Header;
