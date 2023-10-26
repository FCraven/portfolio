'use client'
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Layout =({children})=> {
  return (
    <StyledLayout>
      { children }
    </StyledLayout>
  )
}

export default Layout;
