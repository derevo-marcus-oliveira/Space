import React from 'react'
import { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

//Rotas
import App from './routers/App'
import GalaxiaDetalhe from './routers/components/Galaxies/Detalhe/GalaxiaDetalhe'
import Galaxies from './routers/components/Galaxies/Galaxies'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "galaxies",
        element: <Galaxies/>,
      },
      {
        path: "galaxies/:id",
        element: <GalaxiaDetalhe/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
