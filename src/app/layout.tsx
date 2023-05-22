import './globals.scss'
import Link from "next/link";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import {MainProvider} from "@/Context/MainContext";
import ClientLayout from "@/Components/clientLayout/clientLayout";



export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
            <MainProvider>
                <ClientLayout>
                    {/*navbar*/}
                    <Navbar/>

                    {children}

                    {/*footer*/}
                    <Footer/>
                </ClientLayout>
            </MainProvider>
        </body>
        </html>
    )
}
