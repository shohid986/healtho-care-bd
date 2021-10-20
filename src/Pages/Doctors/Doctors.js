import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const {services} = useAuth();
    return (
        <div>
            <div className="doctors-banner py-5">
                <h1 className="text-center fw-bolder text-white pt-5 mt-5">EXPERTS DOCTORS</h1>
                <div className="d-flex justify-center">
                <p className="bg-dark mx-auto p-2 opacity-75 text-white fs-4 d-inline">Healtho care BD</p>
                </div>
            </div>
            <div className="text-center my-5">
                <h5 className="text-secondary fw-bold">MEET OUR EXPERIENCED DOCTOR</h5>
                <h2 className="fw-bolder">WE ARE EXPERTS IN OUR FIELD</h2>
            </div>
            <div className="container my-5 py-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.slice(6, 16).map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Doctors;