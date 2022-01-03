import {
  Container,
  Content
} from './styles'

import logoImg from '../../assets/logo.svg'

export function Header({ ...rest }) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dt money' />

        <button type='button' {...rest}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}