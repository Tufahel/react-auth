import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../../images/Map.png';
import Header from '../Header/Header';
import '../Home/Home.css';

const Destination = () => {
    const { transportId } = useParams();
    const [transportHire, setTransportHire] = useState({});
    useEffect(() => {
        const url = `https://mocki.io/v1/8ccefdf2-c153-4f6e-87af-7e033b25ae5b`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTransportHire(data.gari[0]))
    }, []);

    return (
        <div className="bg-image">
            <Header></Header>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <form className="pt-5 pb-5 pl-5 mb-3 ml-5 rounded border w-50 bg-light">
                            <label>
                                <input type="text" name="name" placeholder="Pick From" />
                            </label>
                            <br />
                            <label>
                                <input type="text" name="name" placeholder="Pick To" />
                            </label>
                            <br />
                            <div className="row justify-content-center d-flex mt-2 mr-5">
                                <a href="#" className="btn btn-primary" onClick={() => {
                                    alert("Bike available: " + transportHire.available1 +" Fare: " + transportHire.amount1
                                    + "\nCar available: " + transportHire.available2 +" Fare: " + transportHire.amount2
                                    + "\nBus available: " + transportHire.available3 +" Fare: " + transportHire.amount3
                                    + "\nTrain available: " + transportHire.available +" Fare: " + transportHire.amount);
                                }}>
                                    Search
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="img-fluid rounded border w-100 mt-5" src={Map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;