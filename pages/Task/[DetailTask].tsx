/** @format */

import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import { TaskProps } from "../index";
import { GetServerSideProps } from "next";

type DataProps = {
	data: TaskProps;
};

const DetailTask: React.FC<DataProps> = ({ data }) => {
	console.log(data);
	return (
		<ApplicationDetailTask>
			<Head>
				<title>Detail page</title>
				<meta property='og:title' content='My detailpage title' key='detailtitle' />
			</Head>
			<TaskInfo>ss</TaskInfo>
		</ApplicationDetailTask>
	);
};

export default DetailTask;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(`http://localhost:5000/Tasks/Task/${context.query.DetailTask}`);
	const data = await res.json();

	return { props: { data } };
};

const ApplicationDetailTask = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TaskInfo = styled.div``;
