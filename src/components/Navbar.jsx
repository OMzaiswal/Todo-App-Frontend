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
        <h1>Loading...</h1>
        </>
    }

    if (username) {
        return <div>
            <div className='flex justify-between'> 
            <div className='text-red-600'>
            Todo App
            </div>
            <div>
                <p>Welcome back, {username}</p>
                <button className='mr-5' 
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
        <div className='flex justify-between'> 
            <div className='text-red-600'>
            Todo App
            </div>
            <div>
                <button onClick={() => navigate('./Signup')} className='mr-5'>Signup</button>
                <button onClick={() => navigate('./Signin')} className='mr-5'>Signin</button>
            </div>
        </div>
    </div>
    }   
}