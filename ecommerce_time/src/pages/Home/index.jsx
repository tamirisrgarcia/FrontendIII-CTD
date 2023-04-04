import Layout from "../../layouts"
import { useEffect } from "react"
import api from '../../service/api'
import styles from './style.module.css'

export default function HomePage() {
    async function getTimes() {
        try{
            const response = await api.get("/teams", {
                headers: {
                    Authorization: localStorage.getItem("@times_token")
                }
            })
            console.log(response.data)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getTimes();
    }, [])
    
    return(
        <Layout>
            <h1>HomePage</h1>
        </Layout>
    )
}