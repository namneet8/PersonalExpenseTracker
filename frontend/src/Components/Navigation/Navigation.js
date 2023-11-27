import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.jpeg'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
            <img src={logo} alt="" />
            <span><h2>Expense Tracker</h2></span>
            
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 100%;
    height: 05px;
    margin-top: -30px;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        width: 200px;
        display: flex;
        flex-direction:row;
        align-items: center;
        gap: 1rem;
        img{
            width: 50px;
            height: 50px;
            border-radius: 20%;
            object-fit: cover;
            background: #fcf6f9;
            padding: .2rem;
            margin-top: -90px;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        span{
            width: 150px;
            height:50px;
        }
        h2{
            width: 150px;
            margin-top:-30px;
            height:60px;
        }
       
    }

    .menu-items{
        flex: 1;
        display: flex;
        margin-top:-20px;
        flex-direction: row;
        padding-left: 30rem;
        li{
            
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 2rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;






export default Navigation