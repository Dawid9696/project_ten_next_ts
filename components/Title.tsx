/** @format */

import styled from "styled-components";
import React from "react";

interface TitleProps {
	name: string;
	count: any;
}

const Title: React.FC<TitleProps> = (props) => {
	const { name, count } = props;
	console.log("I am rendering !!! :(");
	return (
		<StyledTitle>
			{name} you have {count} tasks !
		</StyledTitle>
	);
};

const StyledTitle = styled.section`
	margin-top: 20px;
	padding: 0px;
	box-sizing: border-box;
	font-size: 20px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default React.memo(Title);
