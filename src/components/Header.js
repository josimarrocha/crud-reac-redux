import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary justify-content-between d-flex">
    <h1>
      <Link to={'/'} className='text-light'>CRUD - React, Redux, REST API & Axios</Link>
    </h1>
    <Link to='/produtos/novo' className='btn btn-danger novo-post'>
      Adicionar Produto &#43;
    </Link>
  </nav>
)

export default Header