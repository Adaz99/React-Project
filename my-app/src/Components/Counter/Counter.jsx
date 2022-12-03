import "./Counter.scss"
import { useState } from "react"



const Counter = () => {
    const [counter, setCounter] = useState(0)


const plus = () => {
    if (counter >= 0)
    setCounter(counter + 1);
}

const minus = () => {
    if (counter > 0)
    setCounter(counter - 1);
}
return (
    <div className="counter">
        <p>My Counter</p>
        <p>{counter}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>


    </div>
)
}


export default Counter