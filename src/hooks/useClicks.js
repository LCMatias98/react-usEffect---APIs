import { useState } from "react";

export const useClicks = () =>{
    const [clicks, setClicks] = useState(0);

    const increment = () =>{
       setClicks(clicks + 1);
    };

    const decrement = () =>{
        setClicks(clicks - 1);
     };

     return{
        increment,decrement,clicks
     };
};