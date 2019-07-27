import React from "react";
import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartItemsContainer>Empty</CartItemsContainer>
    <CartDropdownButton>Go To Checkout</CartDropdownButton>
  </CartDropdownContainer>
);

export default CartDropdown;
