/** @format */

import styled from "styled-components";
import React from "react";

interface TitleProps {
	name: string;
	count: any;
}

const Button2 = ({ handleClick, children }: any) => {
	console.log("I am rendering !!! :( as button:" + children);
	return <button onClick={handleClick}>{children}</button>;
};

// const StyledTitle = styled.b`
// 	margin-top: 20px;
// 	padding: 0px;
// 	box-sizing: border-box;
// 	font-size: 20px;
// 	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

export default React.memo(Button2);
