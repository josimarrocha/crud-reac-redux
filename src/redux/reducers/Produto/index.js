import { MOSTRAR_PRODUTOS, REMOVER_PRODUTO, ADD_PRODUTO, EDITAR_PRODUTO, MOSTRAR_PRODUTO } from './actions'

const initialState = {
  produtos: [],
  messageDelete: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_PRODUTOS:
      return {
        ...state,
        produtos: action.payload,
        produto: ''
      }
    case MOSTRAR_PRODUTO:
      return {
        ...state,
        produto: action.payload
      }
    case REMOVER_PRODUTO:
      return {
        ...state,
        produtos: state.produtos.filter(produto => produto.id !== action.payload)
      }
    case ADD_PRODUTO:
      return {
        ...state,
        produtos: [...state.produtos, action.payload]
      }
    case EDITAR_PRODUTO:
      return {
        ...state,
        produtos: state.produtos
          .map(produto => produto.id === action.payload.data.id
            ? action.payload.data
            : produto
          )
      }
    default:
      return state
  }
}