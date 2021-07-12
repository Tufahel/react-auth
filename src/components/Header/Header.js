import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState({});
    console.log("logged In User name", loggedInUser.name);
    return (
        <div>
            {/* <img src={logo} alt=""/> */}
            <div>
                <div>
                    <div className="nav justify-content-center">
                        <div className="mt-2">
                        <Link className="nav-link btn btn-dark round" to="/home">Travel BD</Link>
                        </div>
                    </div>
                    <div className="nav justify-content-end">
                        <li className="nav-item mr-2 mt-2">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item mr-2 mt-2">
                            <Link className="nav-link" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item mr-2 mt-2">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item mr-2 mt-2">
                            {loggedInUser.email === undefined && <Link className="nav-link btn-info" to="/login">Login</Link>}
                            {loggedInUser.email && <Link className="nav-link" to="/home">{loggedInUser.email}</Link>}
                        </li>
                        <li className="nav-item mr-2 mt-2">
                            {loggedInUser.email && <button className="nav-link btn-info" onClick={() => setLoggedInUser({})}>Log Out</button>}
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;