import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TrasactionsTable() {
  useEffect(() => {
    api('transactions')
      .then(res => console.log('API transactions success'))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$1.000,00</td>
            <td>Casa</td>
            <td>06/10/2021</td>
          </tr>
          <tr>
            <td>Desenvolvomento de website</td>
            <td className='deposit'>R$12.000,00</td>
            <td>Freela</td>
            <td>10/10/2021</td>
          </tr>
          <tr>
            <td>Parcela da viagem</td>
            <td className='withdraw'>- R$2.000,00</td>
            <td>Lazer</td>
            <td>15/10/2021</td>
          </tr>
          <tr>
            <td>Venda do PS4</td>
            <td className='deposit'>R$1.200,00</td>
            <td>Extra</td>
            <td>21/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}