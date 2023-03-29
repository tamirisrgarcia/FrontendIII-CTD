import  ContatoPage  from './pages/contato'
import  HomePage  from './pages/home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  SobreNos from './pages/sobrenos'
import  RelatorioPage from './pages/relatorios'

//https://api-products-dh-next.vercel.app/


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contato' element={<ContatoPage />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
        <Route path='/relatorios' element={<RelatorioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
