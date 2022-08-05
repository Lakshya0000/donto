import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import promoBanner from '../../../Images/doctor-nurse.png';
import './Promo.css';

const Promo = () => {
    return (
        <section className="promo-wrapper">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} sm={12} lg={6}>
                        <div className="promo-content text-white text-start">
                            <h1>Request your appointment and start your smile makeover!</h1>
                            <button href=".#" className="theme-btn btn-fill mt-4">Request Appointment</button>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={6}>
                        <div className="promo-banner">
                            <img src={promoBanner} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Promo;