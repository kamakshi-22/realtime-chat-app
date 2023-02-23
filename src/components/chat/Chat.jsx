import React, { useEffect } from 'react'
// document in firestore is a collection of fields (key-value pairs)
// addDoc() is a function that adds a document to a collection in firestore
// collection() is a function that returns a reference to a collection in firestore
// serverTimestamp() is a function that returns a timestamp of the server
// onSnapshot() is a function that listens for changes in a collection
// query(), where() allows to specify certain conditions 
import {addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy} from 'firebase/firestore'
import {db} from '../../firebase-config'
import {auth} from '../../firebase-config'
import './Chat.scss'

export const Chat = (props) => {

    // room name
    const {room} = props;

    //user input message
    const [newMessage, setNewMessage] = React.useState('');
    const [messages, setMessages] = React.useState([]);

    const messagesRef = collection(db, 'messages');

    //get messages only from the room that the user is in
    useEffect(() => {
        const queryMessages = query(
            messagesRef, 
            where('room', '==', room),
            orderBy('createdAt', 'asc')
        );
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            // get all the documents in the collection 'messages' and add them to the array 'messages' 
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            })
            setMessages(messages);
        });
        return unsubscribe;
    }, [])


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(newMessage === '') return;
        console.log(newMessage);
        // add a new document to the collection 'messages'
        // the document will have a field 'text' with the value of newMessage
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });
        console.log(newMessage);
        setNewMessage('');
    }
    return (
        <div className='chat'>
            <div className='header'>
                <h1>Welcome to: {room.toUpperCase()}</h1>
            </div>
            <div className='messages'>
                {messages.map((message) => (
                    <div className='message' key="message.id">
                        <span className='user'>{"User " + message.user.slice(0,1) + " :"}</span>
                        <span className='text'>{message.text}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type your message here"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}
