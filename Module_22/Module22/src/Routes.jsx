import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UsersDetails from "./pages/UsersDetails"
import About from "./pages/About"
import Form from "./components/Forms";


export default function AppRoute(){
    return(
        <Routes>
        <Route element={<MainLayout/>}>
            <Route path="/"  element={<Home/>}/>
            <Route path="/users"  element={<Users/>}/>
            <Route path="/users/:id"  element={<UsersDetails/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/form"  element={<Form/>}/>
        </Route>
    </Routes>
    )
}