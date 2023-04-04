import { AuthContext } from "../context/auth-context"
import { useContext, useEffect } from "react"
import logo from "../assets/logo-dh.png"
import styles from './style.module.css'
import { useNavigate } from "react-router-dom"

export default function Layout({children}){
    const { name, removeUserStorage } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@times_token")
        if(!token) {
            navigate("/")
        }
    }, [])

    function logout() {
        removeUserStorage();
        navigate('/')
    }

    return(
        <div>
            <header className={styles.header}>
                <img className={styles.logo} src={logo} alt="Logo Digital House" />
                <ul>
                    <li>Olá, {name}</li>
                    <li>
                        <button className={styles.button} onClick={logout}>Sair</button>
                    </li>
                </ul>
            </header>
            <div className={styles.children}>{children}</div>
            <footer className={styles.footer}>
                <p>Digital House | Todos os direitos reservados</p>
            </footer>
        </div>
        
    )
}