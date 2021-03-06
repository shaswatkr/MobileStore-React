import React, { Component } from "react";
import Product from "./product";
import Title from "./title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) => {
                                        return (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        );
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
