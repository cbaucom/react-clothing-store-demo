import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, ImageContainer, QuantityContainer, TextContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItem}) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
	<CheckoutItemContainer>
		<ImageContainer>
			<img src={imageUrl} alt={name} />
		</ImageContainer>
		<TextContainer>{name}</TextContainer>
		<QuantityContainer>
			<div>&#10094;</div>
			<span>{quantity}</span>
			<div>&#10095;</div>
		</QuantityContainer>
		<TextContainer>{price}</TextContainer>
		<RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
	</CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);