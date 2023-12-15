import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/Context';
import { useGlobalContext } from '../context/globalContext';
import History from '../history/History';
import { dollar } from '../../utils/icons';
import './dashboard.css';



    return (
        <>
            
                <div className="user-con">
                <div className="text">
                    <h2>Hi !!! Welcome back </h2>
                    <p>Let's manage expenses together</p><br></br>
                </div>
            </div>
                <h1>All Transactions</h1>
                <div className="stats-con">
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expenses</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    
                    <div className="history-con">
                        <History />
                    </div>
                    <div className = "minMax">
                    <div className = "salary-minMax">
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        </div>
                        <div className = "expense-minMax">
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
               
            

        </>

    )
}

export default Dashboard
