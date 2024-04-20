import { ChangeEvent, FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { RiShieldUserLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { LoginCredentials, LoginResponse } from "./types/types.login";

import './login.page.css';


export default function LoginPage() {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");


    const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const login = async (credentials: LoginCredentials) => {
        try {
            console.log('login:', credentials);
            const response = await axios.post<LoginResponse>(
                'http://localhost:8000/api/auth/login', credentials);
            if (response.status !== 200) {
                throw new Error("Wrong credential applied!");
            }
            setErrorMessage("Signin Success!");
            const { accessToken } = response.data;
            sessionStorage.setItem('token', accessToken);
            return true;
        } catch (error) {
            setErrorMessage("Wrong Credential!");
            console.error("Error on login:", error);
        }
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const successLogin = await login({ username, password });
        if (successLogin) setLoginSuccess(successLogin);

        setUsername('');
        setPassword('');
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleLogin}>
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
                <button type="submit" >Login</button>
                <div> {errorMessage && <div>{errorMessage}</div>}</div>
            </form>
            {loginSuccess && <Navigate to="/playlist" />}
        </div>
    );
}
