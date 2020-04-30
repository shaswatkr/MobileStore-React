import React, { Component } from "react";
import { Link } from "react-router-dom";

class Default extends Component {
    state = {};
    render() {
        return (
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404"></div>
                    <h1>404</h1>
                    <h2>Oops! Page Not Be Found</h2>
                    <p>
                        Sorry but the page you are looking for does not exist,
                        There is no page with URL:
                        <strong className=" text-danger">
                            {this.props.location.pathname}
                        </strong>
                    </p>
                    <Link to="/"> Back to homepage </Link>
                </div>
            </div>
        );
    }
}

export default Default;
