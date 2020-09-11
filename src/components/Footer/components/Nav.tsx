import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {/* <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code"
      >
        智能合约
      </StyledLink> */}
      {/* <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        Uniswap SUSHI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="#">
        讨论
      </StyledLink>
      {/* <StyledLink target="_blank" href="https://github.com/sushiswap"> */}
      <StyledLink target="_blank" href="https://github.com/leek-finance">
        源代码
      </StyledLink>
      <StyledLink target="_blank" href="#">
        关于
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
