import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const MouseMove = () => {

    const [mouseCoords, setMouseCoords] = useState({x:null, y:null});
    const [click, setClick] = useState(0);

    const handleMouseCoords = (e) =>{
        setMouseCoords({
            x: e.clientX,
            y: e.clientY,
        });
    };
    // async
    useEffect(()=> {
        //console.log("Hola Mundo")
        window.addEventListener("mousemove", handleMouseCoords);
    })
    return (
        <div className="mouse-area">
            <h1>Encontra la cordenada secreta 🔥🔥</h1>
            <h2>Frio frio / Caliente caliente</h2>
            <h3> {mouseCoords.x} | {mouseCoords.y}</h3>
            <Button onClick={() => setClick(click+1)}>+1</Button>
        </div>
    )
};


export default MouseMove;