import React,{useRef, useState} from 'react'
import './Home.scss'
import { Auth } from '../../components/auth/Auth';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Home = () => {

    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
    const [room, setRoom] = useState("")

    const roomInputRef = useRef(null)

    if(!isAuth){
    return (
        <div>
            <Auth setIsAuth={setIsAuth}/>
        </div>
    )}

    
    return (
        <>
        {room 
            ? <div>chat</div> 
            : <div className='room'>
                <label>Enter Room Name</label>
                <input ref={roomInputRef} />
                <button onClick={()=>setRoom(roomInputRef.current.value)}>
                Join Chat
                </button>
            </div>}
        </>
    );
}

//Auth setIsAuth={setIsAuth}
