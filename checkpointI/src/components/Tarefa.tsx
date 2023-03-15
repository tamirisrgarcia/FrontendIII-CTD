import React from "react";
import { useState } from "react";
import '../components/tarefa.css'
import { MdDeleteForever, MdEditNote } from 'react-icons/md';

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

          <textarea placeholder="Descreva sua tarefa..." value={descricao} onChange={(event) => setDescricao(event.target.value)}>Descrição</textarea>
          <br />

          <input type="submit" value={id ? "Salvar" : "Cadastrar" } />

        </form>
      </div>

      <div className="listarTarefas">
        <h2>Minhas Tarefas</h2>
          {listaTarefa.length > 0 ? (
            <ul>
              {listaTarefa.map((item) => (
                <li key={item.id} className="card">
                  <div className="info">
                  <p className="titulo">{item.titulo}</p>
                  <p className="categoria">{item.categoria}</p>
                  <p className="descricao">{item.descricao}</p>
                  </div>

                  <div className="buttons">
                    <p className="data">{item.data}</p>
                    <button onClick={() => preencheTarefa(item)}><MdEditNote size={20}/></button>
                    <button onClick={() => apagarTarefa(item.id)}><MdDeleteForever size={20} /></button>
                  </div>
                  
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