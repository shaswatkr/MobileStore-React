import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Details extends Component {
    state = {};
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart,
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img
                                        src={img}
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> Model: {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by: <span> {company} </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span> Rs </span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize fon-weight-bold mt-3 mb-0">
                                        Some info about product:
                                    </p>
                                    <p className="text-muted lead"> {info} </p>
                                    <div>
                                        <Link to="/">
                                            <button className="btn btn-outline-danger m-2">
                                                Back to Products
                                            </button>
                                        </Link>
                                        <button
                                            className="btn btn-outline-success m-2"
                                            disabled={inCart}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? (
                                                <p
                                                    className="text-capitalize mb-0"
                                                    disabled
                                                >
                                                    in cart
                                                </p>
                                            ) : (
                                                <div>
                                                    Add to Cart{" "}
                                                    <i className="fas fa-cart-plus" />
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
