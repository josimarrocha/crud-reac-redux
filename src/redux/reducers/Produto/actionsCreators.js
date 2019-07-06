import axios from 'axios'
import { MOSTRAR_PRODUTOS, REMOVER_PRODUTO, ADD_PRODUTO, EDITAR_PRODUTO, MOSTRAR_PRODUTO } from './actions'

const getProdutos = async () => {
  const resposta = await axios.get('http://localhost:5000/produtos')
  return resposta.data
}

export const mostrarProdutos = () => async dispatch => {
  dispatch({
    type: MOSTRAR_PRODUTOS,
    payload: await getProdutos()
  })
}

export const mostrarProduto = id => async dispatch => {
  const response = await axios.get(`http://localhost:5000/produtos/${id}`)
  await dispatch({
    type: MOSTRAR_PRODUTO,
    payload: response.data
  })
}

export const deletarProduto = id => async dispatch => {
  await axios.delete(`http://localhost:5000/produtos/${id}`)
  dispatch({
    type: REMOVER_PRODUTO,
    payload: id
  })
}

export const adicionarProdruto = (nome, preco) => async dispatch => {
  const response = await axios.post('http://localhost:5000/produtos', { nome, preco })
  dispatch({
    type: ADD_PRODUTO,
    payload: response.data
  })
}

export const editarProdruto = (id, nome, preco) => async dispatch => {
  const response = await axios.put(`http://localhost:5000/produtos/${id}`, { nome, preco })
  dispatch({
    type: EDITAR_PRODUTO,
    payload: {
      id,
      data: response.data
    },
  })
}