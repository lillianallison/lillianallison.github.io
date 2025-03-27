import type { AppProps } from 'next/app';
import './styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Lillian Allison</title>
                <meta name="description" content="Portfolio page" />
                <link rel="icon" href="/sparkle.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;