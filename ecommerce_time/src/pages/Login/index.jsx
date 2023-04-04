import api from "../../service/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import logo from "../../assets/logo-dh.png";
import styles from './style.module.css'
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const navigate = useNavigate();
  const { saveName, saveToken } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logar() {
    try {
      const response = await api.post("/auth", { email, password })
      saveName(response.data.name);
      saveToken(response.data.token);
      navigate("/home")
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
        <img src={logo} alt="Logo Digital House" />
        <div className={styles.form}>
            <input
                placeholder="Informe o Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                placeholder="Informe a Senha"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button onClick={logar}>Entrar</button>
        </div>
    </div>
  );
}