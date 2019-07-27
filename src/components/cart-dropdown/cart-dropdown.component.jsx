import React from "react";
import { connect } from "react-redux";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </CartItemsContainer>
    <CartDropdownButton>Go To Checkout</CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
