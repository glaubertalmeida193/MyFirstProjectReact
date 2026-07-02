import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    // Utilizando o useState para receber os valores em variáveis.
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cargo, setCargo] = useState('')
    const [descricaoCargo, setdescricaoCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            sobrenome,
            cargo,
            descricaoCargo,
            imagem,
            time
        })
        setNome('')
        setSobrenome('')
        setCargo('')
        setdescricaoCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Primeiro nome"
                    placeholder="Digite seu primeiro nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Sobrenome"
                    placeholder="Digite seu Sobrenome" 
                    valor={sobrenome}
                    aoAlterado={valor => setSobrenome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={false}
                    label="Descrição cargo:"
                    placeholder="Digite uma breve descrição do cargo" 
                    valor={descricaoCargo}
                    aoAlterado={valor => setdescricaoCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                   + Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario