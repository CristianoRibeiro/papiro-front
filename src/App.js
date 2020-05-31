import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header'
import SideNav from './components/SideNav'
import GlobalStyle from './styles/global'
function App() {
  return (
    <>
    <Header />
    <div class='col-lg-2 left'>
    <SideNav/>
    </div>

    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
    </>
  )
}

export default App;
