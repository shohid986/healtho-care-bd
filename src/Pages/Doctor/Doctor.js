import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({doctor}) => {
    return (
        <div>
           <Col>
                <Card>
                    <Card.Img variant="top" width="200px" height="300px" src={doctor.image} />
                    <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>
                        {doctor.Specialist}
                        <div>
                        <i class="fab fa-facebook icon-sizing first-icon me-2"></i>
                        <i class="fab fa-twitter icon-sizing me-2"></i>
                        <i class="fab fa-youtube icon-sizing me-2"></i>
                        <i class="fab fa-linkedin icon-sizing"></i>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
        </div>
    );
};

export default Doctor;