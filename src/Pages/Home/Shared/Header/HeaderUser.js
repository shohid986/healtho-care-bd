import React from 'react';
import { Button, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../../Hooks/useFirebase';

const HeaderUser = () => {
    const {user, isLoading, handleSignOut} = useFirebase();
    console.log(isLoading);
    if(isLoading){
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <>
            {!user.email ? <Link to="/login"><Button className="ms-5">Login</Button></Link> : <Button onClick={handleSignOut} className="ms-5">Log Out</Button>}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="ms-3">
                    {user.email && <span><span className="text-info">Signed in as: </span> <span className="fw-bold text-white text-decoration-underline">{user.displayName}</span></span>}
                </Navbar.Text>
                </Navbar.Collapse>
        </>
    );
};

export default HeaderUser;