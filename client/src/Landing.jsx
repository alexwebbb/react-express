// Landing.jsx
import { Link } from 'react-router-dom';
import React from 'react';

const Landing = () => (
    <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="Search" />
        <Link to='/search'>or Browse All</Link>
    </div>
);

export default Landing;