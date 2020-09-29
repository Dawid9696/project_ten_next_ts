/** @format */

import styled from "styled-components";
import Head from "next/head";
import useSWR from "swr";

//IMPORTS
import Title from "../components/Title";

export default function AddTask() {
	const { data, error } = useSWR("http://localhost:5000/Tasks/tasks");
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	console.log(data);

	return (
		<ApplicationAddTask>
			<Head>
				<title>Add Task</title>
				<meta property='og:title' content='My addtask title' key='addtasktitle' />
			</Head>
			{data.map((item) => {
				return <div>Task</div>;
			})}
		</ApplicationAddTask>
	);
}

const ApplicationAddTask = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;
