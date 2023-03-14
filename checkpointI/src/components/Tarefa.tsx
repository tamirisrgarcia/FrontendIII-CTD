import React from "react";
import { useState } from "react";
import '../components/tarefa.css'

function Tarefa() {
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")
  const [listaTarefa, setListaTarefa] = useState([])
  const [id, setId] = useState("")
  

  function addTarefa(event){
    event.preventDefault();

    if(titulo === "" || categoria === "" || data === "" || descricao === "") {
      alert("Preencha todas as informações!")
      return;
    }

    if(id) {
      const copiaTarefa = [...listaTarefa];
      const index = copiaTarefa.findIndex((item) => item.id === id);

      copiaTarefa[index].titulo = titulo;
      copiaTarefa[index].categoria = categoria;
      copiaTarefa[index].data = data;
      copiaTarefa[index].descricao = descricao;

    } else {
      setListaTarefa([...listaTarefa, {
        id: Date.now(),
        titulo,
        categoria,
        data,
        descricao,
      }])
    }

    setId("")
    setTitulo("")
    setCategoria("")
    setData("")
    setDescricao("")

  }

  function editarTarefa(event) {
    event.preventDefault();

    const copiaListaTarefa = [...listaTarefa];

    const index = copiaListaTarefa.findIndex(
      (listaTarefa) => listaTarefa.id === id
    );

    copiaListaTarefa[index].titulo = titulo;
    copiaListaTarefa[index].categoria = categoria;
    copiaListaTarefa[index].data = data;
    copiaListaTarefa[index].descricao = descricao;

    setListaTarefa(copiaListaTarefa);
  }


  function apagarTarefa(id) {
    if (confirm("Deseja realmente apagar a tarefa?")) {
      const result = listaTarefa.filter((item) => item.id !== id);
      setListaTarefa(result);
    }
  }
  function preencheTarefa(item) {
    setTitulo(item.titulo);
    setData(item.data);
    setCategoria(item.categoria);
    setDescricao(item.descricao);
    setId(item.id);
  }


  return(
    <div className="tarefa">
      <div className="cadastrarTarefa">
        

        <form onSubmit={addTarefa} className="formulario">
          <h1>Cadastrar Tarefa</h1>
          <input value={titulo} onChange={(event) => setTitulo(event.target.value)} placeholder="Insira o título da tarefa" />
          <br />

          <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
            <option value="" disabled>Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Lazer">Lazer</option>
            <option value="Prioridade">Prioridade</option>
            <option value="Outros">Outros</option>

          </select>
          <br />

          <input value={data} type="date" onChange={(event) => setData(event.target.value)}/>
          <br />

          <textarea cols="30" rows="10" placeholder="Descreva sua tarefa..." value={descricao} onChange={(event) => setDescricao(event.target.value)}>Descrição</textarea>
          <br />

          <input type="submit" value={id ? "Salvar" : "Cadastrar" } />

        </form>
      </div>

      <div className="listarTarefas">
        <h2>Minhas Tarefas</h2>
          {listaTarefa.length > 0 ? (
            <ul>
              {listaTarefa.map((item) => (
                <li key={item.id}>
                  <p>{item.id}</p>
                  <p>{item.titulo}</p>
                  <p>{item.categoria}</p>
                  <p>{item.data}</p>
                  <p>{item.descricao}</p>

                <button onClick={() => apagarTarefa(item.id)}>Apagar</button>
                <button onClick={() => preencheTarefa(item)}>Editar</button>
                  
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma tarefa cadastrada</p>
          )}
      </div>
      
    </div>
  );
}

export default Tarefa;