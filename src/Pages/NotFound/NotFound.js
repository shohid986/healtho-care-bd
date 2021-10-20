import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/404-page/404-banner.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="error-banner">
            <div className="go-home-btn">
            <Link to="/home"><Button>Go to Home</Button></Link>
            </div>
            <div className="error-image">
                <img src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;