import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    
    const aoSalvar = (e) => {
        e.preventDefault();
        console.log(`Form foi submetido: ${nome}, ${cargo}, ${imagem}, ${time}`);
    }

    const times = [
        'Programação', 'Front-End', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto aoAlterado={valor => setNome(valor)} valor={nome} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto aoAlterado={valor => setCargo(valor)} valor={cargo} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto aoAlterado={valor => setImagem(valor)} valor={imagem} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa aoAlterado={valor => setTime(valor)} valor={time} obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
