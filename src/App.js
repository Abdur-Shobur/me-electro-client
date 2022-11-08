import { RouterProvider } from 'react-router-dom'
import './App.css'
import Auth from './auth/Auth'
import routes from './route/routes'

function App() {
  return (
    <Auth>
      <RouterProvider router={routes} />
    </Auth>
  )
}

export default App
