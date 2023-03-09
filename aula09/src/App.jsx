import { useState } from "react";


function App() {
  const [disciplina, setDisciplina] = useState("")
  const [duracao, setDuracao] = useState("")
  const [listaDisciplinas, setListaDisciplinas] = useState([]);
  const [id, setId] = useState("")

  function addItem(event){
    event.preventDefault();

    if(disciplina === "" || duracao === "") {
      alert("Preencha todas as informações!")
      return;
    }

    if(id) {
      const copiaListaDisciplinas = [...listaDisciplinas];
      const index = copiaListaDisciplinas.findIndex((item) => item.id === id);
      
      copiaListaDisciplinas[index].disciplina = disciplina;
      copiaListaDisciplinas[index].duracao = duracao;

    } else {
      setListaDisciplinas([...listaDisciplinas, {
        id: Date.now(),
        disciplina, //disciplina: disciplina
        duracao,
      }])
    }

    setDisciplina("")
    setDuracao("")
    setId("")
    
  }

  function editarItem(item){
    setDisciplina(item.disciplina);
    setDuracao(item.duracao);
    setId(item.id);
  }

  function apagarItem(id) {
    const result = listaDisciplinas.filter((item) => item.id !== id);
    setListaDisciplinas(result);
  }

  return(
    <div className="App">
      <h1>Cadastro de Disciplina</h1>

      <form onSubmit={addItem}>
        <input value={disciplina} onChange={(event) => setDisciplina(event.target.value)} placeholder="Nome da disciplina" />
        <select value={duracao} onChange={(event) => setDuracao(event.target.value)}>
          <option value="" disabled>Selecione uma opção</option>
          <option value="40">40 horas</option>
          <option value="60">60 horas</option>
          <option value="80">80 horas</option>
        </select>
        <br />

        <input type="submit" value={id ? "Salvar" : "Cadastrar" } />
      </form>

      {listaDisciplinas.length > 0 ? 
      <ul>
      {listaDisciplinas.map((item) => <li key={item.id}>
        <p>{item.id}</p>
        <p>{item.disciplina}</p>
        <p>{item.duracao}</p>

        <button onClick={() => apagarItem(item.id)}>Apagar</button>
        <button onClick={() => editarItem(item)}>Editar</button>
      </li>)}
    </ul> : <p>Não existe disciplina cadastrada</p>}

    </div>
  );
}

export default App;