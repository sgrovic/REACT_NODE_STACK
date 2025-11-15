import './index.css';
import { useState } from 'react';
import { loginUser } from '../../services/auth';
import Notification from "../../components/notification/index";
import Input from "../../components/input/index";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const data = await loginUser(email, password);
            setType('success');
            setMessage('Login Success');
            // handle successful login (redirect, store token, etc.)
        } catch (err) {
            setType('error');
            setMessage(err.message || 'Login failed');
        }
    };


    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input type="email" label="Email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" label="Password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <Notification message={message} type={type} onClose={() => setMessage("")} />
        </div>
    );
}