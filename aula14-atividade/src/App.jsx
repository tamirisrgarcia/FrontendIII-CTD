import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);


  async function getUsers() {
    setLoad(true);
    try{
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
      console.log(data);
    } catch(e) {
      alert("Erro ao buscar usuários");
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return(
    <>
      <h1>Usuários</h1>
      {load === true ? "Carregando..." : null}

      {load === false && users.length < 1 ? "Nenhum usuário encontrado" : null}
      
      <ul>
        {users.map((user)=> (
          <li key={user.id}>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <h4>Username: {user.username}</h4>
            <p>Email: {user.email}</p>
            <p>Gênero: {user.gender}</p>
            <p>Data de Nascimento: {user.birthDate}</p>
            <img src={user.image} width={100} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
