import React from "react";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => (
  <CartContainer>
    <ShoppingIcon />
    <ItemCountContainer>0</ItemCountContainer>
  </CartContainer>
);

export default CartIcon;
