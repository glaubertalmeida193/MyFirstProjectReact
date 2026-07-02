import './Colaborador.css'

const Colaborador = ({ nome, sobrenome, imagem, cargo, descricaoCargo, corDeFundo }) => {

    const concatNomeSobrenome = `${nome} ${sobrenome}` 


    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{concatNomeSobrenome}</h4>
            <h5>{cargo}</h5>
            <h6>{descricaoCargo}</h6>
        </div>
    </div>)
}

export default Colaborador