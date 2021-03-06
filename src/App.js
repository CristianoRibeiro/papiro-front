import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header'
import GlobalStyle from './styles/global'
function App() {
  return (
    <>
    <Header />

    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
    </>
  )
}

export default App;
