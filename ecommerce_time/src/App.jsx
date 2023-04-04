import AuthProvider from "./context/auth-context";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import NotFound from "./pages/Not-found";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/" element={<LoginPage />}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
