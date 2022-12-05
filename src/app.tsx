import { useState } from "react";

export const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(counter => counter + 1)}>Counter {counter}</button>
        </div>
    )
}