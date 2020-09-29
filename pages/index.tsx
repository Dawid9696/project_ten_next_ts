/** @format */

import styled from "styled-components";
import Head from "next/head";
import { useSelector, useDispatch, DefaultRootState } from "react-redux";
import React, { useState, useCallback, useMemo } from "react";
//IMPORTS
import Title from "../components/Title";
import Task from "../components/Task";
import Button from "../components/Button";
import Button2 from "../components/Button2";

export interface TaskProps {
	_id: string;
	createdAt: string;
	taskCategory: string;
	taskDeadLine: string;
	taskDescription: string;
	taskDuration: number;
	taskFinished: boolean;
	taskFriend: [];
	taskTitle: string;
	updatedAt: string;
	length?: () => number;
}

type DataProps = {
	data: TaskProps;
	state: DefaultRootState;
};

const useCounter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();
	const increment = () =>
		dispatch({
			type: "INCREMENT",
		});
	const decrement = () =>
		dispatch({
			type: "DECREMENT",
		});
	const reset = () =>
		dispatch({
			type: "RESET",
		});
	return { count, increment, decrement, reset };
};

const Home: React.FC<DataProps> = ({ data }) => {
	const { count, increment, decrement, reset } = useCounter();
	const [salary, setSalary] = useState(100);
	const [age, setAge] = useState(10);

	const increaseSalary = useCallback(() => {
		setSalary(salary + 100);
	}, [salary]);
	const increaseAge = useCallback(() => {
		setAge(age + 100);
	}, [age]);

	const say = useMemo(() => {
		console.log("DAWID AGAIN");
	}, [age]);

	return (
		<ApplicationHome>
			<Head>
				<title>Main Page</title>
				<meta property='og:title' content='My page title' key='title' />
			</Head>
			<Title name='Dawid' count={data.length} />
			<TasksContainer>
				{data.map((task: TaskProps) => (
					<Task key={data._id} task={task} />
				))}
			</TasksContainer>
			<div>{salary}</div>
			{/* <div>{age}</div> */}
			<Button name='Salary' handleClick={increaseSalary}>
				Increase Salary
			</Button>
			<Button2 name='Age' handleClick={increaseAge}>
				Increase Age
			</Button2>
			{say}
			<div>
				<h1>
					Count: <span>{count}</span>
				</h1>
				<button onClick={increment}>+1</button>
				<button onClick={decrement}>-1</button>
				<button onClick={reset}>Reset</button>
			</div>
		</ApplicationHome>
	);
};

export default Home;

export async function getServerSideProps() {
	const res = await fetch(`http://localhost:5000/Tasks/tasks`);
	const data = await res.json();
	return { props: { data } };
}

const ApplicationHome = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TasksContainer = styled(ApplicationHome)``;
