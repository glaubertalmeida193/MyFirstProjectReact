import './Botao.css'

const Botao = (props) => {
    return (
    <button className='botao'>
        //props.children permite passar o conteúdo encapsulado do pai para o filho.
        {props.children}
    </button>
    )
}
