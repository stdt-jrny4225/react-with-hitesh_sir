import React from "react";
import { useEffect , useState} from "react";
export default function Github ()  {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/stdt-jrny4225")
            .then((response) => response.json())
            .then((data) => {console.log(data);  
        setData(data)})
            .catch((error) => console.error("Error fetching followers:", error));
    }, []);
    return (
        <div className=" align-center box-border border-4 border-blue-400 bg-gray-200 p-4 m-4">
            <h1>Github Follwer {data.followers}</h1>
            <img src={data.avatar_url} alt="" />
        </div>
    );
}