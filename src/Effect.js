import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Effect = () => {
    const [clicks, setClicks] = useState(0);
    const [name, setName] = useState("");

    useEffect(() =>{
        console.log("Etapa de montaje")
    },[]);

    useEffect(() =>{
        console.log("Etapa de CLICKS")
    },[clicks]);

    useEffect(() =>{
        console.log("Etapa de NAME")
    },[name]);

//    useEffect(() =>{
  //      console.log("Etapa de UPDATE")
  //  });

    return(
        <div>
            <h1>Ejemplo de useEffect</h1>
            <Button onClick={() => setClicks(clicks+1)}>+1</Button>
            <Button onClick={() => setClicks(clicks-1)}>-1</Button>
           
            <input type="text" placeholder="Nombree" onChange={(e) => setName(e.target.value) }></input>
            
        </div>
    )
};

export default Effect;