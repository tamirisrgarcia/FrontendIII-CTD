import style from "./style.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"


export default function HomePage() {

    const [id, setId] = useState("")
    const navigate = useNavigate()
    
    return(
        <div className={style.app}>
            <h1>Hello Home Page</h1>
            <input 
                placeholder="Informe o ID"
                type="text" 
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br />
            <Link to={`/dashboard/${id}`}>Ir para o dashboard</Link>
            <br />
            <button onClick={() => navigate(`/dashboard/${id}`)}>Ir para a página Dashboard</button>
        </div>
    )
}