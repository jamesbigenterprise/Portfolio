import data from '@/data/data.json';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    if (typeof window === 'object') {
        AOS.init();
    }

    return (
        <>
            <NextSeo
                canonical={data.website}
                defaultTitle={data.name}
                description={data.about}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
