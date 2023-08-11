import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter} from "react-router-dom"
import ListaServico from './pages/ListaServicos/'



// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './componets/Header'
import Footer from './componets/Footer'

// import ListaServicos from './pages/ListaServicos'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        { <Route path='listaServicos' element={<ListaServico />} /> }

      </Routes>
        
  <Footer/>
    </BrowserRouter>
    {/* <ListaServicos/> */}
  </React.StrictMode>,
  


)
