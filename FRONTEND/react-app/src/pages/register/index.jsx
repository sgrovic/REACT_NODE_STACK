import './index.css';
import { useState } from 'react';
import { registerUser } from '../../services/auth';


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await registerUser(name, email, password);
            console.log('Register successful:', data);
            // handle successful registration (redirect, message, etc.)
        } catch (err) {
            setError(err.message || 'Registration failed');
        }
    };


    return (
        <div className="form-container">
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>


                <button type="submit">Register</button>
            </form>
        </div>
    );
}