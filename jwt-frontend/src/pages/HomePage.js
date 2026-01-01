import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


export default function HomePage() {
    const [message, setMessage] = useState("");
    const token=localStorage.getItem("jwt")
    const navigate = useNavigate();

    useEffect(() => {
        isValid()
    }, []);
   async function isValid(){
        if (!token){
            navigate("/login")
        }
      const response=  await axios.get("api/hello",{
            headers: {
                "Authorization":`Bearer ${token}`
            }
      })
       setMessage(response.data)
    }

    function  logout(){
       localStorage.removeItem("jwt")
        navigate("/login")
    }
    return (
        <div style={{ margin: 40 }}>
            <h2>Page protégée</h2>
            <p>{message.message}</p>
            <button onClick={logout}>
                Déconnexion
            </button>
        </div>
    );
}
