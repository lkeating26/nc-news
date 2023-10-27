import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getUsers } from '../utils/api';
import { UserContext } from '../contexts/User'
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

    const { user, setUser } = useContext(UserContext)

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [inputUser, setInputUser] = useState('');
    const [isInvalidUser, setIsInvalidUser] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getUsers().then((gotUsers) => {
            setUsers(gotUsers)
        })
        .catch((err) => {
            setError(err)
        })
    }, []);

   const handleSubmit = (e) => {
        e.preventDefault();
        const validUser = users.find((u) => {
            return u.username === inputUser;
        })
        if(validUser) {
            setIsInvalidUser(false)
            setUser(validUser)
            navigate('/articles')
        }
        else {
            setIsInvalidUser(true)
            setInputUser('')
        }
   }

  return (
    <section className="welcome-page">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: 
                <input 
                name="username"
                id="username"
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
                />
            </label>
            <button>Login</button>
            { isInvalidUser && <p>Sorry, username not found</p>}
        </form>
    </section>
  )
}
