// Componentes
import Header from './components/header/header'


import './App.css'
import { Outlet } from 'react-router-dom'

const nomes = [
  {nome: ""}
]

function App() {
  
  return (
    <div id="app">
      <Header/>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
