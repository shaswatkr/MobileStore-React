import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "../payPalButton";

const CartTotal = ({ value, history }) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/cart">
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => clearCart()}
                            >
                                Clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title m-2"> Subtotal: </span>
                            <strong> Rs {cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span className="text-title m-2"> Tax: </span>
                            <strong> Rs {cartTax} </strong>
                        </h5>
                        <h5>
                            <span className="text-title m-2"> total: </span>
                            <strong> Rs {cartTotal} </strong>
                        </h5>
                        <PayPalButton
                            total={cartTotal}
                            clearCart={clearCart}
                            history={history}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartTotal;
