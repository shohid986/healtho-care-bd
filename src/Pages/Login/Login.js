import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Login.css';
import loginBanner from '../../images/login/4957136.jpg'
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {user, isLogin, handleChackbox, handleUserName, handleRegisterForm, handleEmailFeild, handlePasswordFeild, handleGoogleSign} = useFirebase();
    console.log(user);
    return (
        <div>
            <div className="text-center mt-3 mb-5">
                <h1>Welcome to <p className="border bg-dark border-success border-3 d-inline p-2 site-logo"><span className="text-info">Healtho</span> <span className="text-white">Care</span> <span className="text-info">BD</span></p></h1>
            </div>
            <Container>
            <Row className="my-5">
                <Col className="mt-5">
                    <h4 className="mb-4">Please {isLogin ? 'Log In' : 'Sign Up'}To Our Page</h4>
                    <form onSubmit={handleRegisterForm}>
                    {!isLogin && <div className="row mb-3">
                        <div>
                            <input placeholder="Enter Your Name" onBlur={handleUserName} type="text" className="mb-2 p-2 input-style" required id="name"/>
                        </div>
                        </div>}
                        <input  onBlur={handleEmailFeild} placeholder="Enter Your Email" className="mb-3 p-2 input-style" type="email" required />
                        <br />
                        <input  onBlur={handlePasswordFeild} placeholder="Enter Your password" required className="mb-3 p-2 input-style" type="password"/>
                        <br />
                    
                    <input onChange={handleChackbox} className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label mb-2 ms-2" htmlFor="gridCheck1">
                    Already have an account?
                    </label>
                    <br />
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Log in' : 'Sign up'}</button>
                    </form>
                    <div className="mt-3">
                        <p className="text-info fw-bold">Log in another way</p>
                        <Button  onClick={handleGoogleSign} className="bg-secondary me-2"><i className="fab fa-google"></i> log in with Google</Button>
                    </div>
                </Col>
                <Col className="container">
                    <img width="550" className="img-fluid" src={loginBanner} alt="" /> 
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;