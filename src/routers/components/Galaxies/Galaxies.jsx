
import './Galaxies.css'
import Galaxias from "../../../../data/data.json"
import { Link } from 'react-router-dom'


function Galaxies() {
  
  return (
    <div id="galaxies">
      <div className='cards'>
        {Galaxias.Galaxies.map((dados, index) => (
            
              <div className='card' key={index}>
                <img src={dados.imagem} alt={dados.nome} />
                <h1>{dados.nome}</h1>
                <p>breve descrição, quando foi descoberta</p>
                <button>
                  <Link to={`/galaxies/${dados.id}`}>More</Link> 
                </button>
              </div>           
            
        ))}
      </div>
    </div>
  )
}

export default Galaxies
