// StoreListings.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const StoreListings = () => {
    return (
        <Container>
            <h2 style= {{ fontWeight: "bold", color: "green"}}>Choose your store in San Diego</h2>
            <Row
                style={{
                    borderBottom: "1px solid #E8E9EB",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <Row>
                    <Col xs="auto" style={{marginBottom: "50px", marginTop:"50px"}}>
                        <Image src="https://www.aldi.com/images/aldi_sued_logo.png" roundedCircle style={{ width: "80px", height: "80px"}} />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold", marginTop:"60px" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs="auto">
                        <Image src="https://1000logos.net/wp-content/uploads/2023/10/Sprouts-Logo-500x281.jpg" roundedCircle style={{ width: "80px", height: "80px" }}/>
                        
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold", marginTop:"15px" }}>
                            Sprouts Farmers Market
                        </h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs="auto" style={{marginBottom: "50px", marginTop:"50px"}}>
                        <Image src="https://zenifydrinks.com/wp-content/uploads/2019/02/kroger-logo-png-transparent.png" roundedCircle style={{ width: "100px", height: "100px" }}/>
                    </Col>
                    <Col sm="1">
                        <h5 style={{ fontWeight: "bold", marginTop:"61px" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
            
        </Container>
        
    );
};

export default StoreListings;
