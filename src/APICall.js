import { useEffect,useState } from "react";
import { useFetch } from "./hooks/useFetch";


const APICall = () => {

    const [names,loading,error] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return(
        <div>
            <h1>Nombres</h1>
            {loading && <h3>CARGANDO ...</h3>}
            {names?.length >0 && names.map((name) => <h2 key={name.id}>{name.title}</h2>)}
        </div>
    );
};

export default APICall;