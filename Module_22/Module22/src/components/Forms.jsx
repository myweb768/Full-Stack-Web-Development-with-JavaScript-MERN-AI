import { useState } from "react";
import Button from "./Buttons";

export default function Form(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [submitted, setSubmitted] = useState(null);

    const handelChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handelSubmitted = (e)=>{
        e.preventDefault();
        setSubmitted(formData)
    };

    const handelReset = ()=>{
        setFormData({name:"", email:"", age:""});
        setSubmitted(null)
    };

    return(
        <div className="form-box">
            <h2>User Form</h2>
            <form onSubmit={handelSubmitted}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handelChange}
                required
                placeholder="User Name..." />

                <label htmlFor="email">email:</label>
                <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handelChange}
                required
                placeholder="User Email..." />

                <label htmlFor="age">age:</label>
                <input 
                type="number"
                name="age"
                value={formData.age} 
                onChange={handelChange}
                required
                placeholder="Age..." />

            <div className="formBut">
                <Button type="submit" title={"Submit"} bgColor={"lightgreen"}/>
                <Button title={"Reset"} bgColor={"lightcoral"} eventClick={handelReset}/>
            </div>
            </form>

            {submitted && (
                <div className="result">
                    <h3>Submitted Result</h3>
                    <h2>Name: {submitted.name}</h2>
                    <p>Email: {submitted.email}</p>
                    <p>Age: {submitted.age}</p>
                </div>
            )}
        </div>

    )
}