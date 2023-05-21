import { AppProps } from 'next/app';
import './globals.scss';
import "swiper/css";
import "swiper/css/navigation";
import RootLayout from "@/app/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    )
}

export default MyApp;
