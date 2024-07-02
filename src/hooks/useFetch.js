import { useEffect, useState } from "react";

// Create a function to fetch the api
const useFetch = (url)=>{
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url).then((res)=>{
            res.json().then((result)=>{
                setData(result.products); /* .products is added because dummyjson data. The data is inside an object with key products and in array format */
            })
        }).catch((err)=>{
            console.log(err)
        })
    }, []);
    return data;
}

export default useFetch

// useFetch return the data in State
// useState contains the function to change the data