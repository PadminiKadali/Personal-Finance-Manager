import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaPlusCircle } from "react-icons/fa";
import backgroundImage from "../assets/dash.jpeg"; // Import the image
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([
    { id: 1, type: "income", amount: 2000, category: "Salary", date: "2025-02-20" },
    { id: 2, type: "expense", amount: 500, category: "Food", date: "2025-02-19" },
    { id: 3, type: "expense", amount: 700, category: "Shopping", date: "2025-02-18" },
  ]);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalBalance = income - expenses;

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div 
      className="dashboard-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set Background Image
    >
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard !!</h2>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="balance-section">
        <h3>Total Balance: ₹{totalBalance}</h3>
        <div className="summary">
          <p>💰 <span className="income-text">Income:</span> ₹{income}</p>
          <p>💸 <span className="expense-text">Expenses:</span> ₹{expenses}</p>
        </div>
      </div>

      <div className="transactions-container">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type}>
              <span className="category">{transaction.category}</span> - ₹{transaction.amount} 
              <span className="date">({transaction.date})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <button className="add-income-btn">
          <FaPlusCircle /> Add Income
        </button>
        <button className="add-expense-btn">
          <FaPlusCircle /> Add Expense
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
