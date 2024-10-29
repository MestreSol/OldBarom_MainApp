import React from "react";
import { Link } from "react-router-dom";

const Style =() => {
return (
    <style>{`
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 10px;
    }
    nav {
        background-color: #f4f4f4;
        padding: 10px;
    }
    nav ul {
        list-style-type: none;
        padding: 0;
    }
    nav ul li {
        display: inline;
        margin-right: 10px;
    }
    nav ul li a {
        text-decoration: none;
        color: #333;
    }
    nav ul li a:hover {
        color: #f00;
    }
    section {
        padding: 20px;
    }

    `}</style>

);
};

const Home = () => {
    return (
        <div>
        </div>
    );
}

export default Home;