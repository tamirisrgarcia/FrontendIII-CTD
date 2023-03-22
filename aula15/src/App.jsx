import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {

  const [todos, setTodos ] = useState([])
  const [title, setTitle ] = useState("")
  const [date, setDate ] = useState("")
  const [id, setId ] = useState("")

  function limpaCampo() {
    setTitle("");
    setDate("");
    setId("");
  }

  async function getTodos() {
    try{
      const response = await axios.get(`https://api-todo-six.vercel.app/todo`);
      setTodos(response.data);
    } catch(e){
      alert("Erro ao buscar tarefa");
    }
  }

  async function addTodo(event) {
    event.preventDefault();

    try{
      await axios.post(`https://api-todo-six.vercel.app/todo`, {
        title: title,
        date: date,
      })
      limpaCampo();
      getTodos();
    } catch (e) {
      alert("Erro ao adicionar tarefa");
    }
  }

  async function deleteTodo(id){
    try{
      await axios.delete(`https://api-todo-six.vercel.app/todo/${id}`);
      getTodos();
      alert("Tarefa apagada");
    } catch(e){
      alert("Erro ao deletar tarefa")
    }
  }

  function preencherTodo(todo){
    setTitle(todo.title)
    setDate(todo.date.split("T")[0]);
    setId(todo._id)
  }

  async function editTodo(event){
    event.preventDefault();

    try{
      await axios.put(`https://api-todo-six.vercel.app/todo/${id}`, {
        title: title,
        date: date,
      })
      limpaCampo()
      getTodos();
      alert( "Tarefa editada com sucesso")
    } catch(e){ 
      alert("Erro ao editar tarefa")
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <h1>Tarefas</h1>

      <form onSubmit={id ? editTodo : addTodo}>
        <input 
          placeholder='Informe o título'
          type="text" 
          value={title} 
          onChange={(event) => setTitle(event.target.value)} 
        />
        <br />
        <input 
          placeholder='Informe a data'
          type="date" 
          value={date} 
          onChange={(event) => setDate(event.target.value)} 
        />
        <br />
        <input type="submit" />
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id} style={{border: "1px solid #555", marginBottom: 5 }}>
            <h3>{todo.title}</h3>
            <p>{todo.date}</p>
            <button onClick={()=> deleteTodo(todo._id)}>Apagar</button>
            <button onClick={()=> preencherTodo(todo)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
