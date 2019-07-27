import React from 'react'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckoutPage = () => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<HeaderBlockContainer>
				<span>Product</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Description</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Quantity</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Price</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Remove</span>
			</HeaderBlockContainer>
		</CheckoutHeaderContainer>
		<TotalContainer>TOTAL: 0</TotalContainer>
		<WarningContainer>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 11/22 - CVV: 123
		</WarningContainer>
	</CheckoutPageContainer>
)

export default CheckoutPage;