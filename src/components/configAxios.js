import axios from "axios";

const livrariaDigita = axios.create ({
    baseURL : "https://projeto-json-dp0k.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
    
});

export default livrariaDigita;