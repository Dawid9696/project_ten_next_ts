/** @format */

import styled from "styled-components";

import Navbar from "./Navbar";

export interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<ApplicationLayout>
			<Navbar />
			{children}
		</ApplicationLayout>
	);
};

export default Layout;

const ApplicationLayout = styled.section`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
