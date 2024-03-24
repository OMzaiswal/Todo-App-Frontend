import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../store/atoms/user";
import { useSetRecoilState } from "recoil";
import axios from "axios";


export function Signup() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    return <div className="flex justify-center mt-20">
    <div className="flex flex-col items-center border border-black rounded-lg w-1/3 h-80 mt-5 p-6 justify-items-center bg-sky-200">
    <h2>Welcome</h2>
    <br />
    <div>
        Username <input className="ml-1" onChange={(e) => {setEmail(e.target.value)}} type="text" />
    </div>
    <br></br>
    <div>
        Password <input className="ml-1" onChange={(e) => setPassword(e.target.value)} type="password" />
    </div>
    <br></br>
    <div>
        <button className="border border-black px-3" onClick={ async () => {
                const res = await axios.post('http://localhost:3000/signup',{ 
                    
                }, { headers: {
                    username: email,
                    password: password,
                    "Content-type": "application/json"
                } 
            })
            // alert(res.data.message);
            const data = res.data;
            localStorage.setItem("token", data.token);
            setUser({
                username: email,
                isLoading: false
            })
            if(data.token){
                navigate('/showTodos');
            } else {
                alert(res.data.message)
                setEmail('');
                setPassword('');
            }
            }}>Signup</button>
    </div>
    <br />
    <div>Already have an account ? 
        <a href="#" onClick={() => navigate("/Signin")}> Signin here</a>
        </div>
    
</div>
</div>
}