import { useState } from "react"
import {vagas} from "./dadosPesquisa"

// nome do atributo que resgatar seguindo do nome do atributo que vai regastar
//o useState passa o valor incial do estado.

function Pesquisa(){
    const [vagasPesquisadas, setVagasPesquisadas] = useState([])
   // console.log()
    return(
        <section>
            <h1>Encontre sua vaga agora</h1>
            <input
                placeholder="digite tema da vaga"
                // evento do onBlur mudar a cor do input além de fazer a 
               // captura do conteudo pelo parametro do evento
                onBlur={(evento=>{
                    const textoDigitado = evento.target.value;
                    /*
                    retornar as vagas filtradas, o filro ele recebe uma funcao para cada elemento da lista
                    se rertorna verdadeiros fica lista caso retorne falso ele nao entra na nossa lista
                    -- include-- verifica se nome digitado esta na lista 
                    */
                    const resultadoPesquisa = vagas.filter(vaga => vaga.titulo.includes(textoDigitado))
                    //salava a variavel no state 
                    setVagasPesquisadas(resultadoPesquisa)
                })}
            ></input>
            {/* utilizar o map para mostrar na tela a lista de vaga */}

            {vagasPesquisadas.map(vaga=>(
                <div>
                    <p>{vaga.titulo}</p>
                </div>
            ))

            }

        </section>
    )
}

export default Pesquisa