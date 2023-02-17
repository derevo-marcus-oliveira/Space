
import './Galaxies.css'
import { Link, useLoaderData, } from 'react-router-dom'

export async function loader() {
  
  const req = await fetch("http://localhost:3000/Galaxies");
  const data = await req.json();
  return data;
}


function Galaxies() {
  const data = useLoaderData();
  
  if(data.length > 0){

    return (
      <div id="galaxies">
        <div className='cards'>
          {data.map((dados, index) => (
              
                <div className='card' key={index}>
                  <img src={dados.imagem} alt={dados.nome} />
                  <h1>{dados.nome}</h1>
                  <p>{dados.resumo}</p>
                  <button>
                    <Link to={`/galaxies/${dados.id}`}>More</Link> 
                  </button>
                </div>           
              
          ))}
        </div>
      </div>
    )
  }
}

export default Galaxies
