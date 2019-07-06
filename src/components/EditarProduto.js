import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { editarProdruto, mostrarProduto } from '../redux/reducers/Produto/actionsCreators'
import Formulario from './Formulario'

const EditarProduto = ({ editarProdruto, history, match, item, show }) => {
  const [error, isError] = useState(false)
  const [borderColorNome, setBorderNome] = useState(false)
  const [borderColorPreco, setBorderPreco] = useState(false)
  useEffect(() => {
    show(match.params.id)
  }, [])

  const handleClickInput = () => {
    if (error) {
      setBorderNome(false)
      setBorderPreco(false)
    }
  }

  const editProduto = (e) => {
    e.preventDefault()
    const { nome, preco } = e.target
    if (!nome.value || !preco.value) {
      if (!nome.value) setBorderNome(true)
      if (!preco.value) setBorderPreco(true)
      isError(true)
      return false
    }
    editarProdruto(match.params.id, nome.value, preco.value)
    isError(false)
    history.push('/')
  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className="col-md-8">
        {item && <Formulario
          error={error}
          submit={editProduto}
          editar={true}
          produto={item}
          borderColorNome={borderColorNome}
          borderColorPreco={borderColorPreco}
          handleClickInput={handleClickInput}
        />}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  produtos: state.produtos.produtos,
  item: state.produtos.produto
})

export default connect(mapStateToProps, { editarProdruto, show: mostrarProduto })(EditarProduto)
