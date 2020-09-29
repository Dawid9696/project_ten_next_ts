/** @format */

import React from "react";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Post = ({ htmlString, data }: any) => {
	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<meta property='og:title' content='My page title' key='title' />
			</Head>
			<div>Content: {data.title}</div>
			<div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
		</div>
	);
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync("posts");
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));
	return {
		paths,
		fallback: false, // See the "fallback" section below
	};
};
export const getStaticProps: GetStaticProps = async ({ params: { slug } }: any) => {
	const metaData = fs.readFileSync(path.join("posts", slug + ".md")).toString();
	const parsedMetaData = matter(metaData);
	console.log(parsedMetaData);
	const htmlString = marked(parsedMetaData.content);
	return {
		props: { htmlString, data: parsedMetaData.data }, // will be passed to the page component as props
	};
};
