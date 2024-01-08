// StoreListings.js
import React from "react";
import { Container } from "react-bootstrap";

const StoreListings = () => {
    return (
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
            <h1 style={{ fontWeight: "bold", color: "black", display: "inline-block", marginRight: "10px",  marginTop: "40px" }}>Choose your store in</h1>
            <h1 style={{ fontWeight: "bold", color: "Green", display: "inline-block", marginRight: "10px",  marginTop: "40px" }}>San Diego</h1>
        </Container>

        
    );
};

export default StoreListings;
