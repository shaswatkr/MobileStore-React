import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Modal extends Component {
    state = {};
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <div className="modal-container">
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="modal"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-ceter text-capitalize"
                                        >
                                            <h5 className="text-center mt-3">
                                                Item added to the Cart
                                            </h5>
                                            <img
                                                src={img}
                                                alt="product"
                                                className="img-fluid m-5"
                                            />
                                            <h5> {title} </h5>
                                            <h5 className="text-muted">
                                                Rs: {price}
                                            </h5>
                                            <div className="text-center">
                                                <Link to="/">
                                                    <button
                                                        className="btn btn-outline-success m-3"
                                                        onClick={() =>
                                                            closeModal()
                                                        }
                                                    >
                                                        Continue Shopping
                                                    </button>
                                                </Link>
                                                <Link to="/cart">
                                                    <button
                                                        className="btn btn-outline-warning m-3"
                                                        onClick={() =>
                                                            closeModal()
                                                        }
                                                    >
                                                        Go to Cart
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;
