import { Html, Main, NextScript, Head } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link href="/Portfolio/logo.svg" rel="icon" />
                <meta
                    content="James, Alves, James Alves, software engineer, back end"
                    name="keywords"
                />
                <link href="/Portfolio/manifest.json" rel="manifest" />
                <link href="/Portfolio/logo.svg" rel="apple-touch-icon"></link>
                <meta content="#fff" name="theme-color" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
