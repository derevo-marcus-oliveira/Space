
import { useHref, useLoaderData } from "react-router-dom";
import Galaxias from "../../../../../data/data.json"
import imagem from "../../../../../public/img/andromeda.jpg"

import "./GalaxiaDetalhe.css"

export async function loader() {
  
    const req = await fetch("http://localhost:3000/Galaxies");
    const data = await req.json();
    return data;
  }
  
const GalaxiaDetalhe = () => {
    var url = useHref();
    const data = useLoaderData();
    debugger
    return (
        <>        
            <div id="galaxieDetalhe">
                {data.filter(p => p.id == parseInt(url.split('/')[2])).map((dados) => (
                    <div className="galaxia" key={dados.id}>
                        {console.log(dados)}
                        <div className="titulo">
                            <h1>{dados.nome}</h1>
                        </div>
                        <div className="imagens">                            
                            <div className="imagem">                                
                                <div key={dados.id}>
                                    <img src={dados.imagem} alt={dados.nome} />
                                </div>                               
                            </div>
                        </div>
                        <div className="conteudo">
                            {dados.info.descricao.split('/').map((text) => (
                                <>
                                    <br/>
                                    <p>{text}</p>
                                </>
                            ))}                            
                        </div>
                    </div>

                ))}
            </div>        
        </>
    )
}

export default GalaxiaDetalhe;