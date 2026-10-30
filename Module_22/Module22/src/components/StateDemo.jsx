import { useState } from "react";

export default function StateDemo(){
    const [user, setUser] = useState({name: "Abdur Rahman", email:"devlop12@gmail.com"});
    const [skill, setSkill] = useState(["HTML", "CSS", "JS"]);

    const updateName = ()=> setUser({...user, name: "Abdul Karim"});
    const addSkill = ()=> setSkill([...skill, "React"]);

    return(
        <div className="state-box">
            <h2>Object and Array State</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button className="btn" onClick={updateName}>Update Name</button>

            <h3>Skills</h3>
            <ul>
                {skill.map((skill, index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <button className="btn" onClick={addSkill}>Update Skills</button>
        </div>
    )
};