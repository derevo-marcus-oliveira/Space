

import './App.css'

const nomes = [
  {first: "marcus", last: "oliveira"},
  {first: "mario", last: "machado"},
  {first: "ana", last: "paula"},
  {first: "eduardo", last: "gomes"},
]

let listaFiltradaNome = [];

function filtrar (params) {
  debugger
  params = document.querySelector(".campo").value != null ? document.querySelector(".campo").value : "";

  nomes.filter((p) => {
    debugger
    if(p.first.search(params) > 0){
      listaFiltradaNome.push(p)
    }
  })
}

function App() {

  return (
    <div className="app">
      <div className='menu'>
        <ul className='lista'>
          <li className='item'>
            <p data-text="Avião">Avião</p>
            <i></i>
            <div></div>
          </li>
          <li className='item'>
            <p data-text="Barco">Barco</p>
            <i></i>
            <div></div>
          </li>
          <li className='item'>
            <p data-text="Carro">Carro</p>
            <i></i>
            <div></div>
          </li>
          <li className='item'>
            <p data-text="Moto">Moto</p>
            <i></i>
            <div></div>
          </li>          
        </ul>
      </div>

      <div className='home'>
        <div className='titulo'>
          <h1>Pesquisa</h1>
        </div>
        <div className='pesquisa'>
          <input type="text" className='campo' placeholder='Pesquisa' />
          <button className='btn' onClick={filtrar}> Pesquisar </button>
        </div>

      </div>
      <div className="rodape">

        {setInterval(() => {
            console.log("Start")
          },10000)}
      </div>
    </div>
  )
}

export default App
