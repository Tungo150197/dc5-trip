import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class Product extends Component {

    onChoose = (product, quantity) => {
        console.log(product.quantity);
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        if (cart == null)
            cart = {
                products: [],
                total: 0
            };
        let countCart = 0;
        countCart = Number(sessionStorage.getItem("countCart"));
        if (countCart >= 10)
            Swal.fire({
                icon: 'warning',
                title: "Cảnh báo",
                text: "Số lượng sản phẩm trong giỏ hàng không được vượt quá 10",
            })
        else {
            let { products } = cart;
            let tempProduct = product;
            if (products.length > 0) {
                let flag = false;   // this product hasn't in cart
                cart.total = 0;     // reset total = 0 in cart
                products.forEach(el => {
                    if (el._id === product._id) {
                        flag = true;
                        el.quantity += quantity;

                        // kiểm tra số lượng sản phẩm này trong kho có còn cung cấp đủ hay ko?
                        if (el.quantity > product.quantity) {
                            el.quantity -= quantity;    // trả lại y củ số lượng sản phẩm này trong giỏ hàng
                            countCart -= quantity;
                            Swal.fire({
                                icon: 'warning',
                                title: "Cảnh báo",
                                text: "Số lượng sản phẩm trong kho không đủ để thêm vào giỏ hàng nữa",
                            })
                        }
                    }
                    cart.total += el.quantity * el.price;
                });
                if (!flag) {
                    tempProduct.quantity = quantity;
                    cart.total += tempProduct.price * quantity;
                    products.push(tempProduct);
                }
            }
            else {
                tempProduct.quantity = quantity;
                cart.total = tempProduct.price * quantity;
                products.push(tempProduct);
            }
            countCart += quantity;
            // cart.products = products;

            sessionStorage.setItem("cart", JSON.stringify(cart));
            sessionStorage.setItem("countCart", Number(countCart));

            // refresh
            let amount = this.props.amountCurrentItemCart;
            this.props.onAddItemIntoCart(++amount);
        }
    }

    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6">
                <div className="single_product">
                    <div className="thumb">
                        <img src={product.images} alt="product-img" />
                                <Link to='' className="prise">${product.price}</Link>
                    </div>
                    <div className="product_info">
                        <Link to="/destination_details"><h3>{product.name}</h3></Link>
                        <p>{product.description}</p>
                        <button type="submit" className="btn btn-primary"><i className="fa fa-info-circle" /> Chi tiết</button>&nbsp;
                        <button className="btn btn-warning" onClick={() => this.onChoose(product, 1)} ><i className="fa fa-shopping-cart" /> Chọn mua</button>
                    </div>
                </div>
            </div>
        );
    }
}