import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter} from "react-router-dom"

// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './componets/Header'
import Footer from './componets/Footer'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/ListaServicos'
import VisualizarServico from './pages/VisualizarServico'
//import PerfilUsuario from './pages/PerfilUsuario'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'
import Login from './pages/Login'
import PerfilUsuario from './componets/PerfilUsuario'


// import ListaServicos from './pages/ListaServicos'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='listaServicos' element={ <ListaServicos />} /> 
        <Route path='listadevs' element={ <ListaDevs />} />
        <Route path='perfil/:idUsuario' element={ <PerfilUsuario /> } /> 
        <Route path='servico/:idServico' element={ <VisualizarServico /> }/>
        <Route path='cadastrousuario' element={ <CadastroUsuario/> } />
        <Route path='cadastroservico' element={ <CadastroServico/> } />
        <Route path='login' element={ <Login/> } />

    </Routes>    
  <Footer/>
    </BrowserRouter>
    {/* <ListaServicos/> */}
  </React.StrictMode>,
  


)
