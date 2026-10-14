import { useState } from "react";
import Button from "./button";
function Counter({initialCount = 0}){
        const [count, setCount] = useState(initialCount);
        const increase = ()=> setCount(count + 1);
        const decrease = ()=> setCount(count - 1);
        const reset = ()=> setCount(initialCount);

    return (
        <div className = "p-6 bg-gray-800 text-white rounded-xl shadow-md max-w-md mx-auto my-8 text-center">
          <h1 className="text-5xl font-extrabold text-green-400 mb-6">{count}</h1>
          <div className="flex justify-center gap-3">
              <div className="p-4 m-3 ">
                 <Button type = "Inc (+)" bgColor = "bg-green-600" onClick = {increase}/>
                 <Button type = "Dec (-)" bgColor = "bg-red-600" onClick = {decrease}/>
                 <Button type = "Reset (↻)" bgColor = "bg-blue-600" onClick = {reset}/>
              </div>
            </div>

        </div>
        )

}


export default Counter;