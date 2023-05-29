"use client";
import {useEffect} from "react";
import {UseMainContext} from "@/Context/MainContext";
import Settings from "@/Components/Settings";

const ClientLayout = ({children,}: { children: React.ReactNode }) => {
    const {isAuth, isSettings} = UseMainContext()
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };

    }, []);

    return(
        <div className='flex w-screen h-screen bg-[#22202F] relative top-0'>
            <div className="relative z-10 w-full h-full">
            {children}
            </div>
            <div className='absolute rounded-full h-[720px] w-[720px] bg-white z-0' style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(182, 22, 166, 0.2) 0%, rgba(234, 0, 213, 0) 100%)',
                bottom: '-150px',
                right: '-150px'
            }}/>
            <div className='absolute rounded-full h-[720px] w-[720px] bg-white z-0' style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(209, 114, 200, 0.2) 0%, rgba(234, 0, 213, 0) 100%)',
                transform: 'translate(-50%, -20%)',
                left: '50%'
            }}/>
            <div className='absolute rounded-full h-[720px] w-[720px] bg-white z-0' style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(112, 119, 229, 0.5) 0%, rgba(112, 119, 229, 0) 100%)',
                transform: 'translate(-20%, 30%)'
            }}/>
            {isAuth && isSettings && (<Settings/>)}
        </div>
    )
}

export default ClientLayout
