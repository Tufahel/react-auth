import React from 'react';
import Bike from '../../images/Frame.png';
import Car from '../../images/Frame-2.png';
import Bus from '../../images/Frame-1.png';
import Train from '../../images/Group.png';
import BackGround from '../../images/Bg.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="bg-image">
            <Header></Header>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-lg-3 col-md-6 ">
                        <img className="img-fluid pt-5 pb-5 pr-5 pl-5 mr-1 mb-2 ml-1 bg-primary rounded w-100 align-img" src={Bike} alt="Responsive image" />
                        <div className="row justify-content-center d-flex">
                            {loggedInUser.name === undefined && <Link className="nav-link btn btn-primary" to="/login">Bike</Link>}
                            {loggedInUser.name && <Link className="nav-link btn btn-primary" to="/destination">Bike</Link>}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <img className="img-fluid pt-5 pb-5 pr-5 pl-5 mr-1 mb-2 bg-info rounded w-100 align-img" src={Car} alt="Responsive image" />
                        <div className="row justify-content-center d-flex">
                            {loggedInUser.name === undefined && <Link className="nav-link btn btn-info" to="/login">Car</Link>}
                            {loggedInUser.name && <Link className="nav-link btn btn-info" to="/destination">Car</Link>}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <img className="img-fluid pt-5 pb-5 pr-5 pl-5 mr-1 mb-2 bg-danger rounded w-100 align-img" src={Bus} alt="Responsive image" />
                        <div className="row justify-content-center d-flex">
                            {loggedInUser.name === undefined && <Link className="nav-link btn btn-danger" to="/login">Bus</Link>}
                            {loggedInUser.name && <Link className="nav-link btn btn-danger" to="/destination">Bus</Link>}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <img className="img-fluid pt-5 pb-5 pr-5 pl-5 mb-2 bg-success rounded w-100 align-img" src={Train} alt="Responsive image" />
                        <div className="row justify-content-center d-flex">
                            {loggedInUser.name === undefined && <Link className="nav-link btn btn-success" to="/login">Train</Link>}
                            {loggedInUser.name && <Link className="nav-link btn btn-success" to="/destination">Train</Link>}
                        </div>
                    </div>
                </div>

                {/* <div className="row">

                    <img className="img-fluid pt-2 pb-5 pr-2 pl-2 mr-1 mb-1 bg-primary rounded border w-25" src={Bike} alt="Responsive image" />
                    <img className="img-fluid pt-2 pb-5 pr-2 pl-2 mr-1 mb-1 bg-warning rounded border w-25" src={Car} alt="Responsive image" />
                    <img className="img-fluid pt-2 pb-5 pr-2 pl-2 mr-1 mb-1 bg-danger rounded border w-25" src={Bus} alt="Responsive image" />
                    <img className="img-fluid pt-2 pb-5 pr-2 pl-2 mr-1 mb-1 bg-success rounded border w-25" src={Train} alt="Responsive image" />
                </div> */}
            </div>
        </div>

    );
};

export default Home;