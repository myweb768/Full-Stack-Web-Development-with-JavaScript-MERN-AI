import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export default function Users(){
const [user, setUser] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(()=>{
    const fetchUsers = async ()=>{
        try {
            const res = await fetch(import.meta.env.VITE_JSON_URL)
            if(!res.ok) throw new Error("Faield To fetch!!")
                const data = await res.json()
            setUser(data)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    fetchUsers()
},[]);

if(loading) return <div className="loading">Loading...</div>
if(error) return <div className="errorFetch">Error: {error}</div>

    return(
        <div className="users">
            <h1 style={{width:"100%", textAlign: "center", padding: ".5rem", margin: ".5rem auto"}}>Users</h1>
            <ul className="userGrid">
                {user.map((user)=>(
                    <li key={user.id}  className="userCard">
                        <Link to={`/users/${user.id}`}>
                        <div className="userArea">
                    <strong>{user.name}</strong> 
                        <p>{user.email}</p>
                        <p> City:{user.address.city} </p>
                        </div>
                        
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}