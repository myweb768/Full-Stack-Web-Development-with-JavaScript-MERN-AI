import {NavLink} from "react-router-dom"

export default function Navbar(){
return(
        <nav className="Navbar" >
        <h2 className="logo">User Directory</h2>
        <div className="nav-Links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        
    </nav>
)
}

