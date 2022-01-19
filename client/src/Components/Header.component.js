import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const nav = useNavigate();

    console.log(name, room);

    const formSubmit = () => {
        nav(`/chat?name=${name}&room=${room}`)
    }

    return(
        <>
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className="box">
                <div className="form-box">
                    <div className="display-6 text-center">
                        JOIN A CHAT ROOM
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Room</label>
                        <input type="text" className="form-control" onChange={(e) => setRoom(e.target.value)}/>
                    </div>
                    <button className="btn btn-outline-success btn-lg my-4" onClick={(e) => name && room ? formSubmit() : e.preventDefault()}>Enter Chat</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header