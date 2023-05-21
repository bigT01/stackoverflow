import { AppProps } from 'next/app';
import './globals.scss';
import "swiper/css";
import "swiper/css/navigation";
import RootLayout from "@/app/layout";
import {MainProvider, UseMainContext} from "@/Context/MainContext";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/*<MainProvider>*/}
                <RootLayout>
                        <Component {...pageProps} />
                </RootLayout>
            {/*</MainProvider>*/}
        </>
    )
}

export default MyApp;
