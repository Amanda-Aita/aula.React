import { useEffect, useState } from "react"
import CardDev from "../../componets/CardDev"
import "./style.css"

import api from "../../utils/api";

export default function ListaDev() {

    const [devs, setDevs] = useState<any[]>([]);

    const [skillsDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsfiltrados] = useState<any[]>(devs);

    useEffect( () => {
        document.title = "Lista de Devs - VsConnect"

        listarDesenvolvedores()

    }, [])

    function buscarPorSkill(event: any) {
        event.presentDefault();

        const DevsFiltrados = devs.filter((dev: any) => dev.hardSkills.include(skillsDigitada.toLocaleUpperCase()));

        if (DevsFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill")
        } else {
            setListaDevsfiltrados(DevsFiltrados)

        }

    }

    function retornoDevsGeral(event: any) {
        if (event.target.valuev === "") {
            listarDesenvolvedores()

        }
        setSkillDigitada(event.target.value)

    }

    function listarDesenvolvedores() {


        api.get("users").then( (response: any ) => {
            console.log(response.data)
            setDevs(response.data)


        } )

    }


return (
    <>
        <main>
            <div className="container container_lista_devs">
                <div className="lista_devs_conteudo">
                    <h1>Lista de Devs</h1>
                    <hr />
                    <form method="post" onSubmit={buscarPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar desenvolvedores</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral} />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {devs.map((dev: any, index: number) => {
                                return <li key={index}>
                                    <CardDev
                                        foto={dev.user_img}
                                        nome={dev.nome}
                                        email={dev.email}
                                        techs={dev.hardSkills}

                                    />


                                </li>
                            }
                            )}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </main>

    </>


)

}