import { useClicks } from "./hooks/useClicks";

const Clicks = () =>{
    const {increment,decrement,clicks} = useClicks();

    return(
        <div>
            <button onClick={increment}>+1 🔥🔥</button>
            <button onClick={decrement}>-1 🔥🔥</button>
            <h2>Clicks: {clicks} </h2>
        </div>
    );
};

export default Clicks;