import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products = [];
        storeProducts.forEach((item) => {
            const product = { ...item };
            products = [...products, product];
        });
        this.setState({ products: products });
    };

    getItem = (id) => {
        return this.state.products.find((product) => product.id === id);
    };

    getCart = (id) => {
        return this.state.cart.find((item) => item.id === id);
    };

    handleDetails = (id) => {
        const detailProduct = this.getItem(id);
        this.setState({ detailProduct });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(
            {
                products: tempProducts,
                cart: [...this.state.cart, product],
            },
            () => this.addTotal()
        );
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState({ modalOpen: true, modalProduct: product });
    };

    closeModal = () => {
        this.setState({ modalOpen: false });
    };

    increment = (id) => {
        const tempCart = [...this.state.cart];

        const index = tempCart.indexOf(this.getCart(id));
        const cartProduct = tempCart[index];
        cartProduct.count += 1;
        cartProduct.total = cartProduct.count * cartProduct.price;

        this.setState({ cart: [...tempCart] }, () => {
            this.addTotal();
        });
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];

        const index = tempCart.indexOf(this.getCart(id));
        const cartProduct = tempCart[index];
        cartProduct.count -= 1;

        if (cartProduct.count > 0) {
            cartProduct.total = cartProduct.count * cartProduct.price;
            this.setState({ cart: [...tempCart] }, () => {
                this.addTotal();
            });
        } else {
            this.removeItem(id);
        }
    };

    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.products];

        tempCart = tempCart.filter((item) => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(
            { cart: [...tempCart], products: [...tempProducts] },
            () => this.addTotal()
        );
    };

    clearCart = () => {
        this.setState({ cart: [] }, () => {
            this.setProducts();
            this.addTotal();
        });
    };

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map((item) => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total,
        });
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetails: this.handleDetails,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
