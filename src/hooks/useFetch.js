import { useState, useEffect } from "react";

export const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    const getData = async (url) => {
        try {
            const data = await fetch(url);
            const response = await data.json();
            setData(response);
        } catch (error) {
            console.error(error);
            setError(true);
        }
        setLoading(false);
    }

    useEffect(()=>{
        getData(url); 
    },[]);

    return [data, loading, error];
};
