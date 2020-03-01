import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function AuthButtons() {
    return (
        <div className="btn-container">
            <Link to="/admin">
                <button className="btn-sign-in">Sign In</button> {' '}
            </Link>
            <button className="btn-reg">Register</button>
        </div>
    )
}

export default AuthButtons;
