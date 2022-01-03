import { GlobalStyle } from "./styles/global"

import { Header } from './components/Header'
import { Dashboard } from "./components/Dashboard"
import Modal from "react-modal"
import { useState } from "react"
import { NewTransactionModal } from "./components/NewTransactionModal"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleNewTransactionModal = () => setIsNewTransactionModalOpen(!isNewTransactionModalOpen)

  return (
    <>
      <Header onClick={handleNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModal}
      />

      <Dashboard />

      <GlobalStyle />
    </>
  )
}