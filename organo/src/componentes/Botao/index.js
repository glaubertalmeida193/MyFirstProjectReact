import './Botao.css'

const Botao = (props) => {
    return (
    <button className='botao'>
        {/* Passa o props escrito do Pai para o filho */}
        {props.children}
    </button>
    )
}

export default Botao