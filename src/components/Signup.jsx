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

    return <div className="mt-20 flex items-center justify-center">
    <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">SignUp</h1>
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
                const res = await axios.post('http://localhost:3000/signup',{ 
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
                navigate('/signup');
            }
            }}>Signup</button>
        </form>
        
        <br />
        <div className="flex justify-center">
            <button 
            onClick={() => navigate("/Signup")} >Create new account</button>
        </div>
    </div>
    </div>
}

    
//     return <div className="flex justify-center items-center mt-20">
//     <div className="max-w-md w-full p-8 rounded-lg bg-white shadow-lg">
//     <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
//     <form className="space-y-4">
//         <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input 
//             type="text"
//             id="email"
//             onChange={(e) => {setEmail(e.target.value)}}
//             className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
//             />
//         </div>
//         <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input 
//             type="password"
//             id="password"
//             onChange={(e) => {setPassword(e.target.value)}}
//             className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
//             />
//         </div>
//         <button className="w-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
//         onClick={ async () => {
//             const res = await axios.post('http://localhost:3000/signup',{  
//                 // username: email,
//             //     password: password   
//             },{ headers: {
//                 username: email,
//                 password: password,
//                 "Content-type": "application/json"
//             } 
//         })
//         // } catch (error) {
//         // alert('something wrong happen') 
//         // }
//         alert('hey');
//         alert(res.data.message);
//         console.log(res.data);
//         const data = res.data;
//         if(data.token){
//             localStorage.setItem("token", data.token);
//             setUser({
//                 username: email,
//                 isLoading: false
//             })
//             navigate('/showTodos');
//         } else {
//             alert(res.data.message);
//             console.log(res.data.message)
//             setEmail('');
//             setPassword('');
//         }
//         }}>Signup</button>
//     </form>
//     <br />
//     <div>Already have an account ? 
//         <a href="#" onClick={() => navigate("/Signin")}> Signin here</a>
//     </div>
//     <br />
// {/*    return <div> 
//     <div>
//         Username <input className="ml-1" onChange={(e) => {setEmail(e.target.value)}} type="text" />
//     </div>
//     <br></br>
//     <div>
//         Password <input className="ml-1" onChange={(e) => setPassword(e.target.value)} type="password" />
//     </div>
//     <br></br>
//     <div>
//         <button className="border border-black px-3" onClick={ async () => {
//                 console.log('sending req');
//                 const res = await axios.post('http://localhost:3000/signup',{ 
                    
//                 }, { headers: {
//                     username: email,
//                     password: password,
//                     "Content-type": "application/json"
//                 } 
//             })
//             // alert(res.data.message);
//             const data = res.data;
//             if(data.token){
//                 localStorage.setItem("token", data.token);
//                 setUser({
//                     username: email,
//                     isLoading: false
//                 })
//                 navigate('/showTodos');
//             } else {
//                 alert(res.data.message);
//                 navigate('/signup')
//                 setEmail('');
//                 setPassword('');
//             }
//             }}>Signup</button>
//     </div>
//     <br />
//     <div>Already have an account ? 
//         <a href="#" onClick={() => navigate("/Signin")}> Signin here</a>
//         </div> 
    
// </div>
// */}
// </div>
// </div>
// }