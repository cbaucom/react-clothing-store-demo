import React from 'react'

import { CollectionFooterContainer, NameConatiner, PriceContainer, BackgroundImage, CollectionItemContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({id, name, price, imageUrl}) => (
	<CollectionItemContainer>
		<BackgroundImage imageUrl={imageUrl} />
		<CollectionFooterContainer>
			<NameConatiner>{name}</NameConatiner>
			<PriceContainer>{price}</PriceContainer>
		</CollectionFooterContainer>
		<AddButton inverted>Add to cart</AddButton>
	</CollectionItemContainer>
)

export default CollectionItem