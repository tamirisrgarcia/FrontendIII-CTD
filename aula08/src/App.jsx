import { useState } from "react";


function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAgeInput, setUserAgeInput] = useState("");
  const [userFavoritePokemonInput, setUserFavoritePokemonInput] = useState("");

  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);

  function addUserList() {
    const newUser = {
      idade: userAgeInput,
      name: userNameInput,
      pokemon: userFavoritePokemonInput,
    };

    setListaDeUsuarios([...listaDeUsuarios, newUser]);
    setUserNameInput("");
    setUserAgeInput("");
    setUserFavoritePokemonInput("");	
  }

  console.log(listaDeUsuarios);

  return (
    <div>
      <h1>Lista de Usuário e Pokemon Favorito</h1>

      <form>
        <input
          value={userNameInput}
          onChange={(event) => setUserNameInput(event.target.value)}
          placeholder="Nome Completo"
        />

        <br />


        <input
          value={userAgeInput}
          onChange={(event) => setUserAgeInput(event.target.value)}
          placeholder="Idade"
        />
        <br />

        <input
          value={userFavoritePokemonInput}
          onChange={(event) => setUserFavoritePokemonInput(event.target.value)}
          placeholder="Pokemon favorito"
        />
        <br />
        <br />

        <input type="button" onClick={addUserList} value="Adicionar" />
      </form>

      <ul>
        {listaDeUsuarios.map((item, index) => (
          <li key={index}>
            <strong>Nome:</strong> {item.name} - <strong>Idade:</strong> {item.idade} - <strong>Pokemon:</strong> {item.pokemon}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;