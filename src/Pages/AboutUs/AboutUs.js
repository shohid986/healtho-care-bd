import React from 'react';
import { Button } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="about-us-banner py-5 ps-5">
                <h1 className="fw-bolder text-white pt-5 mt-5 ms-5">About Us</h1>
                <p className="bg-dark mx-auto p-2 opacity-75 text-white fs-4 d-inline ms-5">Healtho care BD</p>
            </div>
            <div className="d-flex about-offer-flex container my-5 py-5">
                <div>
                    <p className="fs-1 fw-light mb-0">We Offer</p>
                    <p className="fs-1 fw-bold mb-1">Fast & Reliable</p>
                    <p className="fs-1 fw-bolder mb-0 header-style">Medical & HealthCare <br /> Solutions to Our Patients</p>
                    <p>Evercare Hospital Dhaka is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety..</p>
                </div>
                <div>
                    <img className="about-offer-banner" src="http://health.templines.org/wp-content/uploads/2018/07/about1.png" alt="hospital" />
                </div>
            </div>
                <div className="container mb-5">
                    <h1 className="text-center proud-header my-5 justify-center">Our proud history</h1>
                    <div className="d-flex container about-proud-flex fs-5 regular-text-style">
                        <div className="me-5 ps-5">
                            <p>It all began in 1986 when Multiple Sclerosis Limited (MSL) identified the need for high-quality care services for people living with this chronic disease.</p>
                            <p>By 1999, MSL recognised the time had come to establish NanoCare as a separate legal entity. A savvy and experienced Board was appointed and we were firmly on the path to growth.</p>
                            <p>This growth was boosted by a series of acquisitions within the care sector between 2001 and 2008. By then, we had earned a reputation as an experienced and sizeable private care service provider.</p>
                        </div>
                        <div className="ms-5 pe-5">
                            <p>In 2010, the purchase and integration of Nationwide Health & Aged Care Services represented a major milestone in our growth as specialist cleaning and laundry services bolstered our business portfolio.</p>
                            <p>At around the same time, NanoCare partnered with the US-based Healthcare at Home.  In 2013, NanoCare acquired the business. This nurse-led service has provided a safe, high-quality alternative to hospital care for people with cancer and chronic disease.</p>
                            <p>Today, we are proud to continue our work as a wholly-owned, not-for-profit subsidiary of MSL</p>
                        </div>
                    </div>
                </div>
                <div className="about-contact opacity-75 text-white text-center py-5">
                    <div className="container">
                        <h1 className="fw-normal my-5">We do whatever it takes to bring <br /> you peace of mind</h1>
                        <div className="d-flex justify-content-center pb-5">
                            <div className="me-4"><Button className="fs-5 px-4 py-3 callback-btn border border-2">REQUEST A CALLBACK</Button></div>
                            <div className="d-flex ms-4 contact-info">
                                <i class="fab fa-whatsapp fs-1"></i>
                                <div>
                                    <p className="mb-0">24/7 service available</p>
                                    <p className="fs-4">01 800 688 8688</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AboutUs;