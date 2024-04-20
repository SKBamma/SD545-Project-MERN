import { ChangeEvent, MouseEvent, useState } from "react";
import { RiShieldUserLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";

import './login.page.css';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username !== "Suresh" && password !== "123") {
            console.log(`you are unauthorized to login ${username}`);
        } else {
            console.log(`you are welcome! ${username}`);
        }
        setUsername('');
        setPassword('');
    };

    return (
        <div className='wrapper'>
            <form>
                <h1 className="text">Please Login</h1>
                <div className='input-box'>
                    <input value={username} onChange={handleUser}
                        placeholder='Username' required />
                    <RiShieldUserLine className="icon" />
                </div>
                <div className='input-box'>
                    <input type='password' value={password} onChange={handlePassword}
                        placeholder='Password' required />
                    <FaLock className="icon" />
                </div>
                <button type="submit" onClick={handleLogin} >Login</button>
            </form>
        </div>
    );
}
