import './Botao.css'

const Botao = (props) => {
    return (
    <button className='botao'>
        {/* Passa o props escrito no Pai para o filho */}
        {props.children}
    </button>
    )
}

export default Botao