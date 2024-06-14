import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../store/atoms/user";
import { useSetRecoilState } from "recoil";
import axios from "axios";

export function Signin() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    return <div className="mt-20 flex items-center justify-center">
    <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Sign In</h1>
        <form className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                type="email"
                id="email"
                onChange={(e) => {setEmail(e.target.value)}}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={ async () => {
                const res = await axios.post('https://todo-api.uparkom.lol/login',{ 
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
            if(data.token){
                localStorage.setItem("token", data.token);
                setUser({
                    username: email,
                    isLoading: false
                })
                navigate('/showTodos');
            } else {
                alert(res.data.message)
                navigate('/signin');
            }
            }}>Signin</button>
        </form>
        
        <br />
        <div className="flex justify-center">
            <button 
            className="text-red-500"
            onClick={() => navigate("/Signup")} >Create new account</button>
        </div>
    </div>
    </div>
}