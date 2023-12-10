import {dashboard, expenses, logout, transactions, trend} from '../utils/Icons'

export const menuItems = [
  
    {
        id: 1,
        title: "View Overview",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 2,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Register",
        icon: logout,
    },
    {
        id: 5,
        title: "Login",
        icon: logout,
    }
]