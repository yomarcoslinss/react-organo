import "./CampoTexto.css";

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;
    
    let valor = 'Marcos Linss';

    const aoDigitar = (e) => {
        valor = e.target.value;
        console.log(valor);
    }


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value = {valor}
                onChange = {aoDigitar}
                required = {props.obrigatorio}
                placeholder = {placeholderModificada}
            />
        </div>
    );
};

export default CampoTexto;
