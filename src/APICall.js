import { useEffect,useState } from "react";

const APICall = () => {

    const [names,setNames] = useState([]);
    const getNames = async() =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(data);
        const response = await data.json();
        console.log(response);
        setNames(response);
    };
    //https://jsonplaceholder.typicode.com/todos/1 
    
    useEffect(() =>{
        getNames();
     },[]);
    return(
        <div>
            <h1>Nombres</h1>
            {names?.length >0 && names.map((name) => <h2 key={name.id}>{name.title}</h2>)}
        </div>
    );
};

export default APICall;