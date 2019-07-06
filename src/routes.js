import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Produtos from './components/Produtos'
import NovoProduto from './components/NovoProduto'
import EditarProduto from './components/EditarProduto'

class Routes extends Component{
  render(){
    return(
      <Switch>
        <Route path='/' exact component={Produtos} />
        <Route path='/produtos/novo' exact component={NovoProduto} />
        <Route path='/produtos/editar/:id' exact component={EditarProduto} />
      </Switch>
    )
  }
}

export default Routes