import React, {useState, useContext} from "react";
import Usercontext from "../context/Usercontext";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(Usercontext);
    const handleLogin = () => {
        setUser({name});
    }
    return (
        <div style={{textAlign:"center", display:"flex", margin:"10px", flexDirection:"column"}}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} style={{margin:"20px",padding:"10px"}} />
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{margin:"20px", padding:"10px"}}/>
            <button onClick={handleLogin} style={{color:"tomato", backgroundColor:"ThreeDDarkShadow"}}>Login</button>
        </div>
    )
}
export default Login;