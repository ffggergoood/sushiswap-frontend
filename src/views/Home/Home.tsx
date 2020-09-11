import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/leek.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title="优质资产通证化"
        subtitle="抵押实体资产代币，领取你自己的YSF!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>风险提示</b>: 资产抵押可能存在一定风险，请用户仔细核实后再操作。
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 查看资产池" to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
