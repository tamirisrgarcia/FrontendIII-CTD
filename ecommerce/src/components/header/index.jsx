import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <ul style={{ display: "flex", listStyle: "none", gap: 20 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/sobre-nos">Sobre nos</Link>
                </li>
                <li>
                    <Link to="/relatorios">Relatorios</Link>
                </li>
            </ul>
        </header>
    )
}