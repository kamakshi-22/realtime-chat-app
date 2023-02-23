import React from 'react'
import { auth, provider } from '../../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import './Auth.scss'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Auth = (props) => {

    const {setIsAuth} = props;

    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.log(error)
        }       
    }
    return (
        <div className='auth'>
            <p>sign in with google</p>
            <button onClick={signInWithGoogle}>sign in</button>
        </div>
    )
}
