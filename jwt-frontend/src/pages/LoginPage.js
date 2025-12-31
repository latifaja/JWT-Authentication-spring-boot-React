import { useState } from "react";


import axios from "axios";

export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/auth/login", { username, password });
            console.log(res.data.token);

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