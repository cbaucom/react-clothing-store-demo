import React from 'react'

import { CollectionFooterContainer, NameConatiner, PriceContainer, BackgroundImage, CollectionItemContainer } from './collection-item.styles';

const CollectionItem = ({id, name, price, imageUrl}) => (
	<CollectionItemContainer>
		<BackgroundImage imageUrl={imageUrl} />
		<CollectionFooterContainer>
			<NameConatiner>{name}</NameConatiner>
			<PriceContainer>{price}</PriceContainer>
		</CollectionFooterContainer>
	</CollectionItemContainer>
)

export default CollectionItem