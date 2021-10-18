import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    height="580"
                    className="d-block w-100"
                    src="https://asset.fujifilm.com/www/fr/files/2021-06/f86fd826563faad49af6ff2a373466ba/fujifilm-launches-a-more-comprehensive-portfolio-for-europe-healthcare-community.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay with Healtho Care BD</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    height="580"
                    className="d-block w-100"
                    src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay with Healtho Care BD</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="580"
                    className="d-block w-100"
                    src="https://res.cloudinary.com/imap2/image/upload/c_fill,g_auto,h_630,q_auto:eco,w_1200/v1508233134/industries/industry-healthcare.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay with Healtho Care BD</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;