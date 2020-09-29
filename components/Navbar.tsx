/** @format */
import Link from "next/link";
import styled from "styled-components";

const Navbar: React.FC = () => {
	return (
		<Nav>
			<Link scroll as={`/`} href='/' passHref>
				<StyledLink>HOME</StyledLink>
			</Link>
			<Link scroll as={`/AddTask`} href='/AddTask' passHref>
				<StyledLink>ADD</StyledLink>
			</Link>
			<Link scroll href='/SSG/FAQ' passHref>
				<StyledLink>STATIC PAGE</StyledLink>
			</Link>
		</Nav>
	);
};

const Nav = styled.section`
	text-decoration: none;
	margin: 0px;
	padding: 0px;
	width: 100vw;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-color: ${(props) => props.theme.colors.primary};
`;

const StyledLink = styled.a`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	margin: 20px;
	padding: 0px;
	color: white;
	box-sizing: border-box;
	width: 20%;
	font-size: 25px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
`;

export default Navbar;
