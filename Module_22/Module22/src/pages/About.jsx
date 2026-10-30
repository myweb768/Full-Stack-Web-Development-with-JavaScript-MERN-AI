import StateDemo from "../components/StateDemo"
import Inputs from "../components/Inputs";

export default function About(){
    return(
        <>
        <div style={{display:"flex", padding:".5rem", gap:".7rem"}} className="flexWrap">
        <div className="formSection" >
        <h1>Hello!! This is About Section</h1>

         <Inputs className="HeroSection"/>
        </div>
        
        <div className="stateDemo">
        <h1>State Menage</h1>
        <StateDemo/>
        </div>
        </div>
        
        </>
        
    )
}