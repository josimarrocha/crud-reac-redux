import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adicionarProdruto } from '../redux/reducers/Produto/actionsCreators'
import Formulario from './Formulario'

const NovoProduto = ({ adicionarProdruto, history }) => {
  const [error, isError] = useState(false)

  const addProduto = (e) => {
    e.preventDefault()
    const { nome, preco } = e.target
    if (!nome.value || !preco.value) {
      isError(true)
      return false
    }
    adicionarProdruto(nome.value, preco.value)
    e.target.reset()
    isError(false)
    history.push('/')
  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className="col-md-8">
        <Formulario
          error={error}
          submit={addProduto}
        />
      </div>
    </div>
  )
}

export default connect(null, { adicionarProdruto })(NovoProduto)
