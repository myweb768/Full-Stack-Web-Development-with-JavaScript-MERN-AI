import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Loading from "./components/Loading";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(()=>{
    const fetchUsers = async () =>{
      try{
        const res = await fetch(API_URL);
        if(!res.ok) throw new Error("Failed to Fetching Data!!")
        const data = await res.json();
        setUsers(data)

      }catch(error){
        setError(error.message);
      }finally{
        setLoading(false);
      }
    }

    fetchUsers()
  },[]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar totalUsers={users.length}/>
      <main className="max-w-6xl mx-auto p-4">
        {loading && 
        <div className = "py-20">
          <Loading/>
        </div>
        }
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <UserList users = {users} onDetails ={setSelectedUser} />
        )}

      </main>
      {selectedUser && (
        <UserDetails
        user = {selectedUser}
        onClose = {() => setSelectedUser(null)}
        />

      )}
        
    </div>
  )
}

export default App;