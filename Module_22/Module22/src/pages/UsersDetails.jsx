import { useParams, Link } from "react-router-dom"

export default function UsersDetails(){
const {id} = useParams();

    return(
        <div className="user-details">
            <h1>Users Details</h1>
            <p>Selected User ID: {id}</p>
            <Link to="/users" className="btn">Back to user</Link>
        </div>
        
    )
}