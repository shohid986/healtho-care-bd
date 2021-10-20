import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Detail.css';

const Detail = () => {
    const {services, isLoading} = useAuth();
    const {detailid} = useParams();
    const details = services.filter(service=> service.id === parseInt(detailid))[0];
    if(isLoading){
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <div>
            <div className="detail-banner">
                <div className="container py-5 text-start">
                    <h2 className="pt-4">{details.name}</h2>
                    <h4 className="ms-5">Stay With Healtho Care BD</h4>
                </div>
            </div>
            <div className="container my-5">
            <div className="text-center">
                <h4 className="text-info">Medical Services</h4>
                <h1>Our Healthcare Service</h1>
                <p className="text-secondary fw-bold mb-5">Department of Gastroenterology & Hepatology is devoted to the clinical care of patients with gastrointestinal <br />and liver disorders. The department is home  to excellent patient care.</p>
            </div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col className="mx-auto">
                    <Card>
                        <Card.Img variant="top" width="200" height="220" src={details.image} />
                        <Card.Body>
                        <Card.Title>{details.name}</Card.Title>
                        <Card.Text>
                            {details.discription}
                            <p className="fw-bold text-start mt-2"><span className="text-info">Price: </span><span className="text-primary">{details.price}$</span></p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    );
};

export default Detail;