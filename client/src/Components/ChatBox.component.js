import { FaUserAlt } from "react-icons/fa";
import { useEffect } from "react";

const ChatBox = ({messages, name}) => {
    useEffect(() => {
        const h = window.innerHeight;
        window.scrollTo(0, h);
    }, [messages])
    return (
        <div className=" p-6">
            {messages.map((msg, i) => (
                    <div key={i}>
                        {msg.user.name === "admin" ? 
                        <div>
                            <div className="d-flex justify-content-center"><FaUserAlt size="30" color="white"/></div>
                            <p className="lead my-3 text-white text-center">{msg.message}</p>
                        </div>
                        :
                            msg.user.name === name ?
                            <div className="user-field my-2">
                                <p className="lead text-white  user-input text-end">{msg.message}</p>
                            </div>
                            :
                            <div className="w-50">
                                <div className="btn btn-danger">{msg.user.name}</div>
                                <div className="lead text-white p-2">{msg.message}</div>
                            </div>
                        }
                    </div>
                ))
                }
        </div>
    )
}

export default ChatBox