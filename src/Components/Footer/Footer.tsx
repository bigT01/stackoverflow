'use client';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {UseMainContext} from "@/Context/MainContext";

const Footer = () => {
    const pathName = usePathname()
    const { isAuth } = UseMainContext()

    return isAuth && pathName !== '/login' ? (
        <footer className='absolute grid fixed bottom-0 w-full h-[63px] bg-black grid-cols-3'>
            {/*questions link*/}
            <Link href='/' className={`w-full flex gap-5 items-center justify-center ${pathName === '/' ? 'bg-[#D9D9D910]' : null} relative`}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M31.5 11.25H22.5V9H31.5V11.25ZM3.375 4.5C1.51172 4.5 0 6.01172 0 7.875V12.375C0 14.2383 1.51172 15.75 3.375 15.75H32.625C34.4883 15.75 36 14.2383 36 12.375V7.875C36 6.01172 34.4883 4.5 32.625 4.5H3.375ZM31.5 24.75V27H13.5V24.75H31.5ZM3.375 20.25C1.51172 20.25 0 21.7617 0 23.625V28.125C0 29.9883 1.51172 31.5 3.375 31.5H32.625C34.4883 31.5 36 29.9883 36 28.125V23.625C36 21.7617 34.4883 20.25 32.625 20.25H3.375Z"
                        fill="url(#paint0_linear_0_334)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_334" x1="1.73245e-08" y1="24.0882" x2="36.1535" y2="23.043"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#03F7FD"/>
                            <stop offset="1" stopColor="#7D23CB"/>
                        </linearGradient>
                    </defs>
                </svg>

                <span className='text-[24px]'>QUESTIONS</span>

                {pathName === '/' && <div className="absolute bottom-0 left-0 h-[3px] w-full"
                      style={{background: 'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%)'}}/>}
            </Link>
            {/*tags link*/}
            <Link href='/tags' className={`w-full flex gap-5 items-center justify-center relative ${pathName === '/tags' ? 'bg-[#D9D9D910]' : null}`}>
                <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.95 2.34141C14.1929 2.55098 15.0357 3.74336 14.8286 5.00078L14.1286 9.25H20.9214L21.7429 4.24199C21.95 2.98457 23.1286 2.13184 24.3714 2.34141C25.6143 2.55098 26.4571 3.74336 26.25 5.00078L25.5571 9.25H29.7143C30.9786 9.25 32 10.2834 32 11.5625C32 12.8416 30.9786 13.875 29.7143 13.875H24.7929L23.2714 23.125H27.4286C28.6929 23.125 29.7143 24.1584 29.7143 25.4375C29.7143 26.7166 28.6929 27.75 27.4286 27.75H22.5071L21.6857 32.758C21.4786 34.0154 20.3 34.8682 19.0571 34.6586C17.8143 34.449 16.9714 33.2566 17.1786 31.9992L17.8786 27.7572H11.0786L10.2571 32.7652C10.05 34.0227 8.87143 34.8754 7.62857 34.6658C6.38572 34.4563 5.54286 33.2639 5.75 32.0064L6.44286 27.75H2.28571C1.02143 27.75 0 26.7166 0 25.4375C0 24.1584 1.02143 23.125 2.28571 23.125H7.20714L8.72857 13.875H4.57143C3.30714 13.875 2.28571 12.8416 2.28571 11.5625C2.28571 10.2834 3.30714 9.25 4.57143 9.25H9.49286L10.3143 4.24199C10.5214 2.98457 11.7 2.13184 12.9429 2.34141H12.95ZM13.3643 13.875L11.8429 23.125H18.6357L20.1571 13.875H13.3643Z"
                        fill="url(#paint0_linear_0_338)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_338" x1="1.53996e-08" y1="25.8067" x2="32.1485" y2="25.118"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#03F7FD"/>
                            <stop offset="1" stopColor="#7D23CB"/>
                        </linearGradient>
                    </defs>
                </svg>

                <span className='text-[24px]'>TAGS</span>

                {pathName === '/tags' && <div className="absolute bottom-0 left-0 h-[3px] w-full"
                                          style={{background: 'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%)'}}/>}
            </Link>
            {/*rating link*/}
            <Link href='/rating' className={`w-full flex gap-5 items-center justify-center relative ${pathName === '/rating' ? 'bg-[#D9D9D910]' : null}`}>
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_0_336)">
                        <path
                            d="M22.2222 0H9.77778C8.30556 0 7.10556 1.19219 7.16111 2.63594C7.17222 2.92578 7.18333 3.21563 7.2 3.5H1.33333C0.594444 3.5 0 4.08516 0 4.8125C0 9.87656 1.86111 13.3984 4.36111 15.7883C6.82222 18.1453 9.82222 19.332 12.0333 19.9336C13.3333 20.2891 14.2222 21.3555 14.2222 22.4273C14.2222 23.5703 13.2778 24.5 12.1167 24.5H10.6667C9.68333 24.5 8.88889 25.282 8.88889 26.25C8.88889 27.218 9.68333 28 10.6667 28H21.3333C22.3167 28 23.1111 27.218 23.1111 26.25C23.1111 25.282 22.3167 24.5 21.3333 24.5H19.8833C18.7222 24.5 17.7778 23.5703 17.7778 22.4273C17.7778 21.3555 18.6611 20.2836 19.9667 19.9336C22.1833 19.332 25.1833 18.1453 27.6444 15.7883C30.1389 13.3984 32 9.87656 32 4.8125C32 4.08516 31.4056 3.5 30.6667 3.5H24.8C24.8167 3.21563 24.8278 2.93125 24.8389 2.63594C24.8944 1.19219 23.6944 0 22.2222 0ZM2.71667 6.125H7.40556C7.91111 11.0523 9.02778 14.3445 10.2889 16.5484C8.90556 15.9469 7.46667 15.0992 6.22222 13.907C4.44444 12.2063 3 9.75078 2.72222 6.125H2.71667ZM25.7833 13.907C24.5389 15.0992 23.1 15.9469 21.7167 16.5484C22.9778 14.3445 24.0944 11.0523 24.6 6.125H29.2889C29.0056 9.75078 27.5611 12.2063 25.7889 13.907H25.7833Z"
                            fill="url(#paint0_linear_0_336)"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_336" x1="1.53996e-08" y1="20.3137" x2="32.1435" y2="19.5172"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#03F7FD"/>
                            <stop offset="1" stopColor="#7D23CB"/>
                        </linearGradient>
                        <clipPath id="clip0_0_336">
                            <rect width="32" height="28" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <span className='text-[24px]'>Rating</span>

                {pathName === '/rating' && <div className="absolute bottom-0 left-0 h-[3px] w-full"
                                          style={{background: 'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%)'}}/>}
            </Link>
        </footer>
    ) : null
}

export default Footer
