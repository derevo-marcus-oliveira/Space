
import { useHref } from "react-router-dom";
import Galaxias from "../../../../../data/data.json"
import imagem from "../../../../../public/img/andromeda.jpg"

import "./GalaxiaDetalhe.css"

const GalaxiaDetalhe = () => {
    var url = useHref();
    
    return (
        <>        
            <div id="galaxieDetalhe">
                {Galaxias.Galaxies.filter(p => p.id == parseInt(url[url.length-1])).map((dados) => (
                    <div className="galaxia">
                        <div className="titulo">
                            <h1>{dados.nome}</h1>
                        </div>
                        <div className="imagens">
                            <div className="imagem">
                                {Galaxias.Galaxies.map((dadosImg, index) => (
                                    <div key={index}>
                                        <img src={dadosImg.imagem} alt={dadosImg.id} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="conteudo">

                        </div>
                    </div>

                ))}
            </div>        
        </>
    )
}

export default GalaxiaDetalhe;