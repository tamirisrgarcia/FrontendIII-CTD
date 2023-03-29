import FormularioPage from './pages/Formulario'
import HomePage from './pages/Home'
import NotFoundPage from './pages/Not-found'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/formulario' element={<FormularioPage />} />
        <Route path='/formulario/:id' element={<FormularioPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
