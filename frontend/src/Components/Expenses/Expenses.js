import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';


    overflow: auto;
    .total-income{
        display: flex;
        
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 0.5rem;
        margin: 1rem 0;
        font-size: 1rem;
        gap: .3rem;
        span{
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        width:100%;
        gap: 0.5rem;
        .incomes{
            flex: 1;
            
        }
    }
`;

export default Expenses
