/** @format */

import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { SWRConfig } from "swr";

const GlobalStyle = createGlobalStyle`
  html body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
	colors: {
		primary: "#374649",
		secondary: "#808080",
	},
};

//IMPORTS
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<SWRConfig
					value={{
						refreshInterval: 3000,
						fetcher: (url: string) => fetch(url).then((res) => res.json()),
					}}
				>
					<Provider store={store}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</Provider>
				</SWRConfig>
			</ThemeProvider>
		</>
	);
}
