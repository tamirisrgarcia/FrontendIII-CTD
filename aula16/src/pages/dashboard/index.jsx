import { Link, useParams } from "react-router-dom"


export default function DashboardPage() {
    const {id} = useParams();

    
    return(
        <div>
            <Link to={"/"}>voltar</Link>
            <h1>Hello Dashboard Page - id: {id}</h1>
        </div>
    )
}