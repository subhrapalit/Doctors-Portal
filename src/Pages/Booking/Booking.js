import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceid } = useParams();

    return (
        <div>
            <h1>Welcome to Booking Details </h1>
            <h2>This is Booking No. 0{serviceid}</h2>

        </div>
    );
};

export default Booking;