import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
