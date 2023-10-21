"use client"

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';


const HeaderContainer = styled.header`
  background-color: var(--color-sepia);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(45deg, #4B3E2F, #7D6752, #4B3E2F);
  border-top: .25rem groove var(--color-sepia);
  border-bottom: .35rem groove var(--color-sepia);
  `;

const Logo = styled.h1`
  color: var(--color-faded-black);
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: .05rem;
  text-shadow: -1px 0 2px var(--color-off-white),
                -2px -2px 0 var(--color-muted-red),
                2px 2px 0 var(--color-muted-blue),
                2px 0 3px var(--color-off-white);
  @media (max-width: 768px){
    font-size: 1.5rem;
  }
`;

const NavList = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: space-around;
  list-style-type: none;
`;

const NavItem = styled.a`
  background: linear-gradient(45deg, #4B3E2F, #7D6752, #4B3E2F);
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 .5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  height: 2rem;
  padding: .5rem 1rem;
  border: 3px groove var(--color-sepia);
  border-radius: 1rem;
  color: ${({ $isActive }) => $isActive ? 'var(--color-muted-blue)' : 'var(--color-off-white)'};
  cursor: pointer;
  text-decoration: none;
  text-shadow: -1px 0 2px var(--color-faded-black);
  box-shadow: -1px -1px 1px var(--color-muted-red),
              1px 1px 1px var(--color-muted-blue),
              -2px -2px 3px var(--color-off-white);
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
    background-color: red;
  }
`;

const Header =()=> {

  const router = useRouter();

  return (
    <HeaderContainer>
      <Logo>Francis Craven</Logo>
      <NavList>

        <Link href='/' passHref legacyBehavior>
          <NavItem $isActive={router.pathname === '/'}>Home</NavItem>
        </Link>

        <Link href="/portfolio" passHref legacyBehavior>
          <NavItem $isActive={router.pathname === '/portfolio'}>Portfolio</NavItem>
        </Link>

        <Link href="/about" passHref legacyBehavior>
          <NavItem $isActive={router.pathname === '/about'}>About</NavItem>
        </Link>

        <Link href="/contact" passHref legacyBehavior>
          <NavItem $isActive={router.pathname === '/contact'}>Contact</NavItem>
        </Link>

      </NavList>
    </HeaderContainer>
  )
}

export default Header;
