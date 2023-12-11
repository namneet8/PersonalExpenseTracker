import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addUser, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        nameUser: '',
        email: '',
        password: ''
    })

    const { nameUser, email, password} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addUser(inputState)
        setInputState({
            nameUser: '',
            email: '',
            password: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={nameUser}
                    name={'nameUser'} 
                    placeholder="Enter your name"
                    onChange={handleInput('nameUser')}
                />
            </div>
            <div className="input-control">
                <input value={email}  
                    type="email" 
                    name={'email'} 
                    placeholder={'Enter your email address'}
                    onChange={handleInput('email')} 
                />
            </div>
            <div className="input-control">
                <input value={password}  
                    type="password" 
                    name={'password'} 
                    placeholder={'Enter password'}
                    onChange={handleInput('password')} 
                />
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add User'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
       ntrol{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Form
