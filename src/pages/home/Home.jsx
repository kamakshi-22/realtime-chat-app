import React, { useRef, useState } from 'react'
import './Home.scss'
import { Auth } from '../../components/auth/Auth';
import Cookies from 'universal-cookie'
import { signOut } from 'firebase/auth';
import { Chat } from '../../components/chat/Chat';
import { auth } from '../../firebase-config';
const cookies = new Cookies()

export const Home = () => {

    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
    const [room, setRoom] = useState("")

    const roomInputRef = useRef(null)

    const signUserOut = async () => {
        try {
            await signOut(auth);
            cookies.remove("auth-token");
            setIsAuth(false);
            setRoom(null);
        } catch (error) {
            console.log(error);
        }
    }

    if (!isAuth) {
        return (
            <div>
                <Auth setIsAuth={setIsAuth} />
            </div>
        )
    }


    return (
        <>
            {room
                ? <Chat room={room} />
                : <div className='room'>
                    <label>Enter Room Name</label>
                    <input ref={roomInputRef} />
                    <button onClick={() => setRoom(roomInputRef.current.value)}>
                        Join Chat
                    </button>
                </div>
            }
            <div className='signout'>
                <button onClick={() => signUserOut()}>Logout</button>
            </div>
        </>
    );
}

//Auth setIsAuth={setIsAuth}
