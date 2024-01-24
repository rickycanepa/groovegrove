import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {

        navigate('/');
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={handleNavigate}>Go to Home</button>
        </div>
    );
};

export default Dashboard;