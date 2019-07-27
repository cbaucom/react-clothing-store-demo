import React from 'react'

import { auth } from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	OptionDiv
} from './header.styles';

const Header = ({currentUser}) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">
				SHOP
			</OptionLink>
			<OptionLink to="/contact">
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>SIGN OUT {currentUser.email}</OptionDiv>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
		</OptionsContainer>
	</HeaderContainer>
)

export default Header
