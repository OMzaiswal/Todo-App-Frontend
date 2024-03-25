import React from 'react';
import { userState } from '../store/atoms/user';
import { usernameState } from '../store/selectors/username';
import { isUserLoading } from '../store/selectors/isUserLoading';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Signup } from './Signup';

export function Navbar() {

    const navigate = useNavigate();
    const userLoading = useRecoilValue(isUserLoading);
    const username = useRecoilValue(usernameState);
    const setUser = useSetRecoilState(userState);

    if (userLoading){
        return <>
        <h1 className="text-gray-600 text-lg font-bold">Loading...</h1>
        </>
    }

    if (username) {
        return <div>
            <div className='flex justify-between items-center px-4 py-2 bg-gray-900 text-white'> 
            <div className='text-red-600 font-bold text-xl'>
            Todo App
            </div>
            <div>
                <p>Welcome, {username}</p>
                <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg' 
                onClick={() => {
                    localStorage.setItem('token',null)
                    setUser({
                        isLoading: false,
                        username: null
                    })
                    navigate('/');
                }}>Logout</button>
            </div>
        </div>
        </div>
    } else {
        return <div> 
        <div className='flex justify-between items-center px-4 py-2 bg-gray-900 text-white'> 
            <div className='text-red-600 font-bold text-xl'>
            Todo App
            </div>
            <div>
                <button onClick={() => navigate('./Signup')} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                >Signup</button>
                <button onClick={() => navigate('./Signin')} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                >Signin</button>
            </div>
        </div>
    </div>
    }   
}