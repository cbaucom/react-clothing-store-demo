import React from 'react'

import { CheckoutItemContainer, ImageContainer, QuantityContainer, TextContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
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
		<RemoveButtonContainer>&#10005;</RemoveButtonContainer>
	</CheckoutItemContainer>
)

export default CheckoutItem;