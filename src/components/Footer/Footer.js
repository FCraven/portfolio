'use client'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  background: linear-gradient(45deg, #4B3E2F, #7D6752, #4B3E2F);
  border-top: .25rem groove var(--color-sepia);
  border-bottom: .35rem groove var(--color-sepia);
`



const Footer =()=> {
  return (
    <FooterContainer />
  )
}

export default Footer;
