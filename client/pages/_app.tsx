import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/Header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head key={"main-head-data"}>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Student Manager</title>
            </Head>
            <Header />
            <div className="app-container">
                <Component {...pageProps} />
            </div>
        </>
    );
}
