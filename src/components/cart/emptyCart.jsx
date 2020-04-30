import React from "react";

const EmptyCart = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>
                        Your Cart is Currently{" "}
                        <strong className="text-blue"> Empty </strong>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;
