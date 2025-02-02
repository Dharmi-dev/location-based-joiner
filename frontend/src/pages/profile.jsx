import React, { useState, useRef } from "react";
import { RiEditFill } from "@remixicon/react";
import "../index.css";
import Button from "../components/button";
import userProfile from "../assets/ganesh-profile-pic.jpg";

export default function ProfilePage({ userName, userEmail, userCote }) {
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [cote, setCote] = useState(userCote);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const coteRef = useRef(null);

    const handleButton = () => {
        console.log("Saved changes:", { name, email, cote });
    };

    return (
        <>
            <div className="profile-left flex items-center bg-slate-600 justify-start gap-20 max-w-[80vw] m-auto p-3 rounded">
                <img className="bg-red-400 h-60" src={userProfile} alt="User Profile" />
                <div className="">
                    <div className="mb-5 flex items-center justify-between">
                        <label className="text-white font-semibold" htmlFor="name">Name :</label>
                        <input className="rounded bg-blue-100 mx-4 px-3 py-2 "
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ref={nameRef}
                        />
                        <button onClick={() => nameRef.current.focus()}>
                            <RiEditFill className="rounded-full bg-gray-300 text-gray-800 p-1.5" size={30} />
                        </button>
                    </div>

                    <div className="mb-5 flex items-center justify-between">
                        <label className="text-white font-semibold" htmlFor="email">Email :</label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ref={emailRef}
                            className="rounded bg-blue-100 mx-4 px-3 py-2 "
                        />
                        <button onClick={() => emailRef.current.focus()}>
                            <RiEditFill className="rounded-full bg-gray-300 text-gray-800 p-1.5" size={30} />
                        </button>
                    </div>

                    <div className="mb-5 flex items-center justify-between">
                        <label className="text-white font-semibold" htmlFor="usercote">Your Quote :</label>
                        <input
                            id="usercote"
                            type="text"
                            value={cote}
                            onChange={(e) => setCote(e.target.value)}
                            ref={coteRef}
                            className="rounded bg-blue-100 mx-4 px-3 py-2"
                        />
                        <button onClick={() => coteRef.current.focus()}>
                            <RiEditFill className="rounded-full bg-gray-300 text-gray-800 p-1.5" size={30} />
                        </button>
                    </div>
                    <Button onClick={handleButton} textValue={"Save Changes"} handleButton={handleButton} />
                </div>
            </div>
        </>
    );
}