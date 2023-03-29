import DashboardPage from './pages/dashboard'
import HomePage from './pages/home'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }, 
  {
    path: '/dashboard/:id',
    element: <DashboardPage />
  }
])

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
