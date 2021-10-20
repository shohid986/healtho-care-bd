import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
        </div>
    );
};

export default Doctor;