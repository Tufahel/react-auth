import React from 'react';
import Header from '../Header/Header';
import '../Home/Home.css'

const Contact = () => {
    return (
        <div className="bg-image">
            <Header></Header>
            <div className="justify-content-center align-items-center d-flex mt-5">
                    <h1>Contact with us!!</h1>
            </div>
            <div className="justify-content-center align-items-center d-flex mt-5">
                    <h2>Email: travelbd@abc.com</h2>
            </div>
        </div>
    );
};

export default Contact;