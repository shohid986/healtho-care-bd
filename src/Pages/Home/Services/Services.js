import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useAuth();
    return (
        <div className="container my-5 py-5">
            <div className="mx-auto mb-4 text-center">
                <p className="text-secondary fw-bolder">WE CARE OUR DEPARTMENT SUPPORT</p>
                <h3>OUR OUTSTANDING DEPARTMENT</h3>
            </div>
            <div className="w-25 mx-auto border border-2 mb-5"><hr className="m-0 text-secondary" /></div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.slice(0,6).map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;