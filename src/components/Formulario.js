import React from 'react'

const Formulario = ({ error, submit, editar, produto, borderColorNome, borderColorPreco, handleClickInput }) => {
  return (
    <div className="card">
      <div className="card-body">
        {error && <span className='btn btn-danger d-block mb-2'>Todos os campos são obrigatórios!</span>}
        <h2 className='text-center'>{editar ? 'Editar produto' : 'Adicionar novo produto'}</h2>
        <form action="" onSubmit={submit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              onChange={handleClickInput}
              type="text"
              className='form-control'
              placeholder='Nome do produto'
              name='nome'
              defaultValue={editar ? produto.nome : ''}
              style={{ borderColor: `${borderColorNome ? 'red' : ''}` }}
            />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input
              onChange={handleClickInput}
              type="text"
              className='form-control'
              placeholder='Preço do produto'
              name='preco'
              defaultValue={editar ? produto.preco : ''}
              style={{ borderColor: `${borderColorPreco ? 'red' : ''}` }}
            />
          </div>
          <button
            type="submit"
            className='btn btn-primary text-uppercase'>
            {editar ? 'Salvar alterações' : 'Adicionar produto'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Formulario
