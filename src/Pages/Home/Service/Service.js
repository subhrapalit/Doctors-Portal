import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = ({ service }) => {
    const { id, name, description, img } = service;

    return (


        <Card className='service' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title style={{ color: 'crimson' }}>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/booking/${id}`}><Button variant="info">Book {name} Now!</Button></Link>
            </Card.Body>
        </Card>

    );
};

export default Service;
