import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported);https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={Logo} alt="Home" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link navbar-title">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button type="button" className="btn btn-outline-info">
                        <i className="fas fa-cart-plus"> My Cart </i>
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;
