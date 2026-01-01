import { useState } from "react";


import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
        const navigate=useNavigate()

    const login = async (e) => {
        //empêche le comportement par défaut du navigateur lors d’un événement.

        //Comportement par défaut DE  Élément <form>	EST Recharge la page DONC ON PERD LE TOCKEN DE LA CONSOLE

        e.preventDefault();
        try {
            const res = await axios.post("api/auth/login", { username, password });
            console.log(res.data.token);
            localStorage.setItem("jwt",res.data.token);
            navigate("/home")

        } catch {
            console.log(e)
        }
    };

    return (
        <div style={{ margin: 40 }}>
            <h2>Login page</h2>
            <form onSubmit={login}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br/><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" /><br/><br/>
                <button type="submit">Login</button>
            </form>

        </div>
    );
}