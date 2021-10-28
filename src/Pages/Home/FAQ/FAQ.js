import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div id='faq' className='mt-5'>
            <h2>Frequently Asked Questions (FAQ)</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who Are We?</Accordion.Header>
                    <Accordion.Body>
                        This website is a platform for all types of people who wants to take any medical services such as. emergency, pharmacy, consultation, checkup etc. This website is a responsive & user-freindly platform for people to connect with some of the best in the medical field
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What Is Our Goal?</Accordion.Header>
                    <Accordion.Body>
                        This website is a platform for all types of people who wants to take any medical services such as. emergency, pharmacy, consultation, checkup etc. This website is a responsive & user-freindly platform for people to connect with some of the best in the medical field
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How Much We Charge?</Accordion.Header>
                    <Accordion.Body>
                        This website is a platform for all types of people who wants to take any medical services such as. emergency, pharmacy, consultation, checkup etc. This website is a responsive & user-freindly platform for people to connect with some of the best in the medical field
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Where Is Our Branches?</Accordion.Header>
                    <Accordion.Body>
                        This website is a platform for all types of people who wants to take any medical services such as. emergency, pharmacy, consultation, checkup etc. This website is a responsive & user-freindly platform for people to connect with some of the best in the medical field
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;