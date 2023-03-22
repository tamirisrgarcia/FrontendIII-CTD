import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [id, setId] = useState("");
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState(1);

  function limpaCampo() {
    setId("");
    setNome("");
    setMatricula("");
    setCurso("");
    setBimestre("");
  }

  async function getAlunos() {
    try{
      const response = await axios.get(`https://api-aluno.vercel.app/aluno`);
      setAlunos(response.data)
    } catch(e){
      alert("Erro ao buscar alunos")
    }
  }

  async function addAluno(event) {
    event.preventDefault()

    try{
      await axios.post(`https://api-aluno.vercel.app/aluno`, {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre
      });
      limpaCampo();
      getAlunos();
      alert("Aluno adicionado com sucesso");
    } catch(e){
      alert("Erro ao adicionar aluno");
    }
  }


  async function deleteAluno(id) {
    try{
      await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
      getAlunos();
      confirm("Deseja deletar aluno?")
    } catch(e){
      alert("Erro ao deletar aluno?")
    }
  }

  function preencherForm(aluno){
    setId(aluno._id);
    setNome(aluno.nome);
    setMatricula(aluno.matricula);
    setCurso(aluno.curso);
    setBimestre(aluno.bimestre);
  }

  async function updateAluno(event){
    event.preventDefault();

    try{
      await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre
      })
      limpaCampo();
      getAlunos();
      alert("Aluno atualizado com sucesso")
    } catch(e){
      alert("Erro ao atualizar aluno")
    }
  }


  useEffect(() => {
    getAlunos()
  }, [])
  
  return (
    <div>
      <h1>Alunos</h1>

      <form onSubmit={id ? updateAluno : addAluno}>
        <input 
          style={{width: 300, borderRadius: 4}}
          type="text" 
          placeholder='Informe o nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input 
          style={{width: 300, borderRadius: 4}}
          type="text" 
          placeholder='Informe a matrícula'
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <br />
        <input 
          style={{width: 300, borderRadius: 4}}
          type="text" 
          placeholder='Informe o curso'
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
        <br />
        <input 
          style={{width: 300, borderRadius: 4}}
          type="number" 
          placeholder='Informe o bimestre'
          value={bimestre}
          onChange={(e) => setBimestre(e.target.value)}
        />
        <br />
        <input type="submit" value={id ? 'Editar' : 'Adicionar'} style={{width: 150, borderRadius: 4, backgroundColor: '#288e67', color: '#FFF'}}/>
      </form>

      <ul>
        {alunos.map((aluno) => (

          <li key={aluno._id} style={{border: "1px solid #999", listStyle: 'none', padding: 10, width: '90%'}}>
            <h3>{aluno.nome}</h3>
            <h4>{aluno.matricula}</h4>
            <p>{aluno.curso}</p>
            <p>{aluno.bimestre}</p>

            <button onClick={()=> deleteAluno(aluno._id)}>Apagar</button>
            <button onClick={()=> preencherForm(aluno)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
