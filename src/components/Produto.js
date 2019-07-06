import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletarProduto } from '../redux/reducers/Produto/actionsCreators'

const Produto = ({ produtoInfo, deletarProduto, showProduto }) => {
  const removerProduto = (id) => {
    deletarProduto(id)
  }

  const { id, nome, preco } = produtoInfo
  return (
    <li className='list-group-item'>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8 d-flex justify-content-between align-items-center">
          <p className='text-dark m-0'>{nome}</p>
          <span className="badge badge-warning text-dark">R$ {preco}</span>
        </div>
        <div className="col-md-4 d-flex justify-content-end acciones">
          <Link to={`produtos/editar/${id}`} className='btn btn-primary'>Editar</Link>
          <button type='button' className='btn btn-danger ml-2' onClick={() => removerProduto(id)}>Deletar</button>
        </div>
      </div>
    </li>
  )
}

export default connect(null, { deletarProduto })(Produto)
