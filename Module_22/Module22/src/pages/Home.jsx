import { useState } from "react";
import Button from "../components/Buttons";
import Form from "../components/Forms"



export default function Home(){

    const [bgColor, setBgColor] = useState("#0000")
    const colors =['#ffffff', '#ffe4e1', '#e0f7fa', '#e8f5e9', '#fff9c4']
    const changeColor = ()=>{
        const rendom = colors[Math.floor(Math.random() * colors.length)]
        setBgColor(rendom)
    }


    return(
        <div className="home" style={{backgroundColor: bgColor}}>
            <div className="HeroSection">
                <h1>Welcome To user Directory App</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eveniet saepe sunt excepturi inventore soluta mollitia laborum, qui esse provident. Unde molestiae aspernatur nobis rerum sapiente quia temporibus dolorem dicta?</p>

            <Button eventClick={changeColor} title={"ChangeBG"} bgColor={"Orange"} />
            </div>
        <Form/>
        </div>
    )

}