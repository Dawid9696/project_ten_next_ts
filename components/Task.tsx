/** @format */

import styled from "styled-components";
import { TaskProps } from "../pages/index";
import Link from "next/link";
import React from "react";

interface Props {
	task: TaskProps;
}

const Task: React.FC<Props> = ({ task }) => {
	console.log("I am rendering :((( too ...");
	return (
		<Link scroll as={`/Task/${task._id}`} href='/Task/[DetailTask]' passHref>
			<StyledLink>
				<StyledTitle finished={task.taskFinished}>{task.taskTitle}</StyledTitle>
				<StyledDesc>{task.taskDescription}</StyledDesc>
			</StyledLink>
		</Link>
	);
};

export default React.memo(Task);

const StyledLink = styled.a`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	margin: 30px;
	padding: 0px;
	box-sizing: border-box;
	width: 40vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
	-webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
	@media (max-width: 768px) {
		width: 80vw;
	}
`;

type TitleProps = { finished: boolean };

const StyledTitle = styled.div<TitleProps>`
	color: ${(props) => (props.finished ? "green" : "red")};
	font-size: 20px;
	font-weight: 600;
	margin: 5px;
`;
const StyledDesc = styled.div`
	color: ${(props) => props.theme.colors.secondary};
	font-size: 15px;
	font-weight: 500;
	margin: 5px;
`;
