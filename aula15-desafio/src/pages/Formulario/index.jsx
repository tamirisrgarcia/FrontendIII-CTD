import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function FormularioPage() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [aluno, setAluno] = useState({});
     
    async function getAluno() {
        
        const { data } = await api.get(`/aluno/${id}`);
        setAluno({ ...data }); 
        
    }

    async function editAluno(ev) {
        ev.preventDefault();
        await api.put(`/aluno/${id}`, aluno)
    }

    async function createAluno(ev) {
        ev.preventDefault();
        await api.post(`/aluno`, aluno);
        navigate("/home")
    }


    useEffect(() => {
        getAluno()
    }, [])
    

    return(
        
        <form onSubmit={id ? editAluno : createAluno}>
            <h1>{id}</h1>
            <input 
                style={{width: 300, borderRadius: 4}}
                type="text" 
                placeholder='Informe o nome'
                value={aluno.nome}
                onChange={(e) => setAluno({...aluno, nome: e.target.value})}
            />
            <br />
            <input 
                style={{width: 300, borderRadius: 4}}
                type="text" 
                placeholder='Informe a matrícula'
                value={aluno.matricula}
                onChange={(e) => setAluno({...aluno, matricula: e.target.value})}
            />
            <br />
            <input 
                style={{width: 300, borderRadius: 4}}
                type="text" 
                placeholder='Informe o curso'
                value={aluno.curso}
                onChange={(e) => setAluno({...aluno, curso: e.target.value})}
            />
            <br />
            <input 
                style={{width: 300, borderRadius: 4}}
                type="number" 
                placeholder='Informe o bimestre'
                value={aluno.bimestre}
                onChange={(e) => setAluno({...aluno, bimestre: e.target.value})}
            />
            <br />
            <input 
                type="submit" 
                value={'Salvar'} 
                style={{width: 150, borderRadius: 4, backgroundColor: '#288e67', color: '#FFF'}}
            />
        </form>
        
    )
}