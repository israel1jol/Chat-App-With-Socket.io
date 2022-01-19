import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ChatBox from "./ChatBox.component";
import SideNav from "./SideNav.component";

let socket;
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [name, setName] = useState();
    const [room, setRoom] = useState()
    const[users, setUsers] = useState([]);
    const location = useLocation();

    useEffect(() => {
        socket = io("https://atomize-backend-server.herokuapp.com/");
        const { name, room } = queryString.parse(location.search);
        setName(name)
        setRoom(room)
        socket.emit("join", {name: name, room: room}, (err) => {
            if(err) alert(err.error)
        });


    }, [location.search])

    const sendMessage = () => {
        socket.emit("sendMessage", message)
        setMessage("");
    }

    useEffect(() => {
        socket.on("message", (data) => {
            setMessages(messages => [...messages, data])
        })

        socket.on("roomData", data => {
            setUsers(data.users)
        })
    }, [])
    return (
        <>
        <div className="w-25 mx-auto border-3 rounded bg-danger p-1 display-6 text-center text-white sticky-component">{room}</div>
        <div className="side-nav w-25"><SideNav users={users}/></div>
        <div className="d-flex">
            <div className="w-25"></div>
            <div className="w-75 shift-to-right">
                <div className="p-3">
                    {messages.length != 0 ? <ChatBox messages={messages} name={name}/>: <></>}
                    <div className="d-flex justify-content-end"><input type="text" className="form-control w-50 mx-3 my-2" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={e => e.key === "Enter" ? sendMessage() : null} /></div> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Chat