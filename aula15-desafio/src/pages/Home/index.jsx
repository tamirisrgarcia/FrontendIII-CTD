import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom"

export default function HomePage() {

    const [alunos, setAlunos] = useState([]);   


    async function getAlunos() {
        try{
            const response = await api.get(`/aluno`);
            setAlunos(response.data)
        } catch(e){
            alert("Erro ao buscar alunos")
        }
    }

    useEffect(() => {
        getAlunos()
    }, [])


    async function deleteAluno(id) {
        await api.delete(`/aluno/${id}`);
        getAlunos();
    }
    
    
    return(
        <div>
            <h1>Alunos</h1>
            <Link to="/formulario">Formulário</Link>
            
            <ul>
            {alunos.map((aluno) => (

                <li key={aluno.matricula} style={{border: "1px solid #999", listStyle: 'none', padding: 10, width: '90%'}}>
                    <Link to={`/formulario/${aluno._id}`}>
                        <h3>{aluno.nome}</h3>
                    </Link>
                    
                    <button onClick={()=> deleteAluno(aluno._id)}>Apagar</button>
                </li>
                ))}
            </ul>
        </div>
    )
}