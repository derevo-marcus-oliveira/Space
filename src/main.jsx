import React from 'react'
import { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'



//Rotas
import App from './routers/App'
import GalaxiaDetalhe,{ loader as galaxiesDetalheLoader } from './routers/components/Galaxies/Detalhe/GalaxiaDetalhe'
import Galaxies, { loader as galaxiesLoader } from './routers/components/Galaxies/Galaxies'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "galaxies",
        loader: galaxiesLoader,
        element: <Galaxies/>,

      },
      {
        path: "galaxies/:id",
        loader: galaxiesDetalheLoader,
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
