import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    return <div className="flex justify-center mt-20">
    <div className="flex flex-col items-center border border-black rounded-lg w-1/3 h-80 mt-5 p-6 justify-items-center bg-sky-200">
        <h1>Welcome</h1>
        <br />
        <div>
            Username <input className="ml-1" onChange={(e) => {setEmail(e.target.value)}} type="text" />
        </div>
        <br></br>
        <div >
            Password <input className="ml-1" onChange={(e) => setPassword(e.target.value)} type="password"  />
        </div>
        <br></br>
        <div >
            <button className="border border-black px-3" onClick={ async () => {
                const res = await axios.post('http://localhost:3000/login',{ 
                    // username: email,
                    // password: password
                }, { headers: {
                    username: email,
                    password: password,
                    "Content-type": "application/json"
                } 
            })
            // alert(res.data.message);
            const data = res.data;
            localStorage.setItem("token", data.token);
            if(data.token){
                navigate('/showTodos');
            } else {
                console.log('1');
                console.log(email);
                console.log('2');
                alert(res.data.message)
                setEmail('');
                setPassword('');
                console.log(email);
                console.log('3');
            }
            }}>Signin</button>
        </div>
        <br />
        <div >
            <button onClick={() => navigate("/Signup")} >Create new account</button>
        </div>
    </div>
    </div>
}