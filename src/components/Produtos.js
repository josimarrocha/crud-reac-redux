import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mostrarProdutos } from '../redux/reducers/Produto/actionsCreators'

import Produto from './Produto'

function Produtos({ mostrarProdutos, produtos }) {
  useEffect(() => {
    mostrarProdutos()
  }, [mostrarProdutos])

  return (
    <>
      <h2 className='text-center my-5'>Lista de Produtos</h2>
      <div className="row justify-content-center">
        <div className="col-8">
          {produtos.produtos.map(produto => (
            <Produto
              key={`produto:${produto.id}`}
              produtoInfo={produto}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const masStateToProps = state => ({
  produtos: state.produtos
})

export default connect(masStateToProps, { mostrarProdutos })(Produtos)
