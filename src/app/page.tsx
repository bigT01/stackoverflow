'use client';
import {useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";


export default function Home() {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className=''>
            <div className='flex w-screen h-screen bg-[#22202F] relative top-0'>
                <div className="relative z-10 w-full h-full">
                    <nav className='w-full bg-[#11111170] h-[65px] flex items-center mb-4'>
                        <div className='mx-auto flex items-center w-full' style={{maxWidth: '95%'}}>
                            <Image src='/logo.svg' alt='logo-icon' width={182} height={42} className={'mr-8'}/>

                            <div className="flex gap-2 px-4 py-1 w-4/12 items-center bg-[#d9d9d933]">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6256 0.68401C11.8025 -0.0341148 9.76563 -0.186615 7.8525 0.233385C5.92625 0.653385 4.1375 1.66776 2.77875 3.09464C1.45125 4.47651 0.533127 6.24713 0.178751 8.13088C-0.17375 9.97713 0.00562477 11.9221 0.70125 13.669C1.55187 15.8303 3.18188 17.6703 5.22188 18.7796C7.04563 19.7846 9.19062 20.1821 11.2544 19.9203C13.1006 19.6934 14.8737 18.9278 16.3119 17.7496C18.9687 20.4053 21.625 23.0615 24.2806 25.7178C24.76 25.239 25.2394 24.7596 25.7188 24.2803C23.0619 21.624 20.4056 18.9684 17.75 16.3115C19.0375 14.7453 19.8269 12.7784 19.9712 10.7559C20.1225 8.78588 19.675 6.77463 18.6906 5.06088C17.5662 3.08214 15.7487 1.50714 13.6256 0.68401ZM10.4262 2.01276C12.7381 2.11776 14.9675 3.29651 16.3625 5.14151C17.4887 6.60526 18.0725 8.46964 17.9931 10.314C17.9313 12.129 17.2231 13.9121 16.0219 15.274C14.9019 16.5571 13.3606 17.4671 11.6931 17.8196C9.84937 18.2178 7.865 17.9484 6.20563 17.0478C4.66875 16.2259 3.41875 14.8846 2.70625 13.294C1.89813 11.5109 1.78312 9.42901 2.3775 7.56463C2.93813 5.78338 4.15063 4.21839 5.73313 3.22776C7.12 2.34589 8.78687 1.92339 10.4262 2.01276Z" fill="white" fill-opacity="0.5"/>
                                </svg>

                                <input type="text" className='h-auto w-full border-none text-[20px] placeholder-[#ffffff50] focus-visible:outline-none' style={{background:'none'}} placeholder='Search questions by key words...'/>
                            </div>
                            <div className='ml-auto flex items-center'>

                                <div className='px-2 py-2 bg-black relative mr-10 w-[340px]'>
                                    <div className="relative z-10 flex items-center gap-2">
                                        <Image src='/rank0.png' alt='img-rank0' width={34} height={34}/>
                                        <p>RANK 0</p>
                                    </div>

                                    <div className="absolute top-0 left-0 z-0 w-[70%] h-full" style={{background: 'linear-gradient(88.76deg, rgba(3, 247, 253, 0.4) 0.58%, rgba(125, 35, 203, 0.4) 98.96%)'}}/>
                                </div>

                                <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4'>
                                    <path d="M9.5675 1.04872C10.4794 0.826844 11.4925 1.35059 11.8412 2.22122C11.9769 2.54372 12.0306 2.90247 11.9737 3.24934C13.6969 3.70184 15.2369 4.77309 16.3 6.19872C17.2481 7.45684 17.8331 8.98434 17.9669 10.5543C18.0094 11.0131 17.9988 11.4743 18 11.9343C18.0006 14.6237 17.9988 17.3125 18.0006 20.0018C17.9844 20.4881 18.3775 20.9425 18.8625 20.9893C19.2406 21.0137 19.6206 20.9931 20 21C20 21.6668 20 22.3331 20 23C17.6044 23.0006 15.2087 22.9993 12.8137 23C13.0469 23.63 13.0588 24.3362 12.8344 24.9706C12.5213 25.8843 11.745 26.625 10.8131 26.8837C9.85 27.1681 8.75563 26.9093 8.01313 26.235C7.11313 25.4575 6.7525 24.1156 7.18625 23C4.79125 22.9993 2.39563 23.0006 0 23C0 22.3331 0 21.6668 0 21C0.35625 20.9962 0.7125 21.0068 1.06812 20.9956C1.4775 20.9825 1.85313 20.68 1.96063 20.2868C2.01438 20.0906 1.99812 19.8856 2 19.685C1.99937 17.0618 2 14.4381 2 11.815C2.0025 11.21 1.98187 10.6025 2.06312 10.0012C2.26875 8.32684 3.0325 6.73122 4.195 5.51059C5.22687 4.41997 6.56937 3.62059 8.02687 3.25434C7.85437 2.26309 8.58938 1.24309 9.5675 1.04872ZM5.36 7.18434C4.48187 8.24684 3.99562 9.62122 4.00062 10.9993C3.99937 13.8962 4 16.7937 4 19.6912C4.0175 20.1343 3.96688 20.5812 3.81375 21C7.93813 21 12.0619 21 16.1863 21C15.9363 20.3612 16.01 19.6681 16 18.9987C15.9987 16.3956 16.0025 13.7925 15.9981 11.1893C15.9838 8.87997 14.6275 6.60872 12.5406 5.58934C11.5462 5.08872 10.405 4.91684 9.30188 5.02559C7.77313 5.19622 6.32937 5.99122 5.36 7.18434ZM9.82375 23.015C9.33312 23.0868 8.95562 23.5725 9.0025 24.0656C9.0175 24.6025 9.53125 25.0506 10.065 24.9975C10.6038 24.9831 11.0506 24.4681 10.9975 23.9343C10.9837 23.3543 10.3887 22.8956 9.82375 23.015Z" fill="white"/>
                                </svg>

                                <Image src='/profile.png' alt='img-profile' width={45} height={45}/>
                            </div>
                        </div>
                    </nav>

                    <section className='mx-auto w-full h-full relative flex gap-10' style={{maxWidth: '95%'}}>
                        {/*left side*/}
                        <div className="w-4/12 h-full">
                            {/*ratings*/}
                            <div className="p-4 w-full 2xl:h-[55%] lg:h-[42%] bg-[#33333370] overflow-y-scroll mb-5">
                                <table className='w-full'>
                                    <thead>
                                    <tr className='text-left'>
                                        <th className='w-8'></th>
                                        <th>Name</th>
                                        <th>Votes</th>
                                        <th>Rating</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>

                                    <tr className='border-b-8 border-transparent'>
                                        <td>1</td>
                                        <td className='flex items-center'><Image src='/userPhoto.png' alt='img-userDias' width={42} height={42} className='mr-3'/> <span>@diasnkteam</span></td>
                                        <td>980</td>
                                        <td><Image src='/rank0.png' alt='img-rank0' width={40} height={40} className='m-0'/></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*tags*/}
                            <div className="p-6 flex flex-wrap bg-[#11111170] w-full gap-4">
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">java</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">javascript</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">php</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">sql</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">css</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">mysql</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">ios</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">django</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">swift</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">ruby</div>
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">.net</div>
                            </div>
                        </div>
                        {/*right side*/}
                        <div className="w-8/12 h-full">
                            {/*header*/}
                            <div className="grid grid-cols-4 gap-5 w-full mb-5">
                                <div className="h-[130px] w-full bg-black flex items-center justify-center" style={{background:'linear-gradient(90deg, rgba(215, 11, 218, 0.5) -0.01%, #FFC240 16.42%, #649BFF 34.14%, #FFC240 48.72%, #ABDD42 62.79%, #07FFFF 77.37%, #0F50C7 91.44%, rgba(215, 11, 218, 0.5) 100.01%)'}}>
                                    <div className="bg-black flex justify-center items-center" style={{width: '99%', height:'98%'}}>
                                        <p className='2xl:text-[20px] lg:text-[16px]'>RECENT QUESTIONS</p>
                                    </div>
                                </div>
                                <div className="h-[130px] w-full bg-black flex items-center justify-center" >
                                    <div className="bg-black flex justify-center items-center" style={{width: '99%', height:'98%'}}>
                                        <p className='2xl:text-[20px] lg:text-[16px]'>TOP QUESTIONS</p>
                                    </div>
                                </div>
                                <div className="h-[130px] w-full bg-black flex items-center justify-center" >
                                    <div className="bg-black flex justify-center items-center" style={{width: '99%', height:'98%'}}>
                                        <p className='2xl:text-[20px] lg:text-[16px]'>UNANSWERED</p>
                                    </div>
                                </div>
                                <div className="h-[130px] w-full bg-black flex items-center justify-center" >
                                    <div className="bg-black flex justify-center items-center" style={{width: '99%', height:'98%'}}>
                                        <p className='2xl:text-[20px] lg:text-[16px]'>UNACCEPTED</p>
                                    </div>
                                </div>
                            </div>
                            {/*main section*/}
                            <main className="h-full">
                                {/*header*/}
                                <div className="flex justify-between items-center mb-4">
                                    <h1 className='font-bold text-[40px]'>RECENT QUESTIONS</h1>
                                    <div className="px-4 py-2" style={{background:'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}}>
                                        <p className="text-white text-[18px] font-medium">ASK QUESTION</p>
                                    </div>
                                </div>
                                {/*main*/}
                                <div className=' w-full overflow-y-scroll' style={{height: '65%'}}>
                                    <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-2 lg:grid-cols-1">
                                        {/*inside component*/}
                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Image src='/defaultQuestion.png' alt='defaultQuestion-image' width={160} height={92}/>
                                            <div>
                                                <h4 className="text-[22px] font-bold">Help me to fix this bug. When I run IDE to provide this code ...</h4>
                                                <div className="flex justify-between">
                                                    {/*Tags*/}
                                                    <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span></p>
                                                    {/*Answers*/}
                                                    <p className="font-light text-[17px] opacity-50">Answers: <span>1.200</span></p>
                                                    {/*Status*/}
                                                    <p className="font-light text-[17px] opacity-50">Accepted</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-20" />
                                    </div>

                                </div>

                            </main>
                        </div>

                    </section>

                    <footer className='absolute grid fixed bottom-0 w-full h-[63px] bg-black grid-cols-3'>
                        <Link href='/' className='w-full flex gap-5 items-center justify-center bg-[#D9D9D910] relative'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.5 11.25H22.5V9H31.5V11.25ZM3.375 4.5C1.51172 4.5 0 6.01172 0 7.875V12.375C0 14.2383 1.51172 15.75 3.375 15.75H32.625C34.4883 15.75 36 14.2383 36 12.375V7.875C36 6.01172 34.4883 4.5 32.625 4.5H3.375ZM31.5 24.75V27H13.5V24.75H31.5ZM3.375 20.25C1.51172 20.25 0 21.7617 0 23.625V28.125C0 29.9883 1.51172 31.5 3.375 31.5H32.625C34.4883 31.5 36 29.9883 36 28.125V23.625C36 21.7617 34.4883 20.25 32.625 20.25H3.375Z" fill="url(#paint0_linear_0_334)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_0_334" x1="1.73245e-08" y1="24.0882" x2="36.1535" y2="23.043" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#03F7FD"/>
                                        <stop offset="1" stop-color="#7D23CB"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <span className='text-[24px]'>QUESTIONS</span>

                            <div className="absolute bottom-0 left-0 h-[3px] w-full" style={{background:'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%)'}}></div>
                        </Link>

                        <Link href='/' className='w-full flex gap-5 items-center justify-center relative'>
                            <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.95 2.34141C14.1929 2.55098 15.0357 3.74336 14.8286 5.00078L14.1286 9.25H20.9214L21.7429 4.24199C21.95 2.98457 23.1286 2.13184 24.3714 2.34141C25.6143 2.55098 26.4571 3.74336 26.25 5.00078L25.5571 9.25H29.7143C30.9786 9.25 32 10.2834 32 11.5625C32 12.8416 30.9786 13.875 29.7143 13.875H24.7929L23.2714 23.125H27.4286C28.6929 23.125 29.7143 24.1584 29.7143 25.4375C29.7143 26.7166 28.6929 27.75 27.4286 27.75H22.5071L21.6857 32.758C21.4786 34.0154 20.3 34.8682 19.0571 34.6586C17.8143 34.449 16.9714 33.2566 17.1786 31.9992L17.8786 27.7572H11.0786L10.2571 32.7652C10.05 34.0227 8.87143 34.8754 7.62857 34.6658C6.38572 34.4563 5.54286 33.2639 5.75 32.0064L6.44286 27.75H2.28571C1.02143 27.75 0 26.7166 0 25.4375C0 24.1584 1.02143 23.125 2.28571 23.125H7.20714L8.72857 13.875H4.57143C3.30714 13.875 2.28571 12.8416 2.28571 11.5625C2.28571 10.2834 3.30714 9.25 4.57143 9.25H9.49286L10.3143 4.24199C10.5214 2.98457 11.7 2.13184 12.9429 2.34141H12.95ZM13.3643 13.875L11.8429 23.125H18.6357L20.1571 13.875H13.3643Z" fill="url(#paint0_linear_0_338)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_0_338" x1="1.53996e-08" y1="25.8067" x2="32.1485" y2="25.118" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#03F7FD"/>
                                        <stop offset="1" stop-color="#7D23CB"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <span className='text-[24px]'>TAGS</span>
                        </Link>

                        <Link href='/' className='w-full flex gap-5 items-center justify-center relative'>
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_336)">
                                    <path d="M22.2222 0H9.77778C8.30556 0 7.10556 1.19219 7.16111 2.63594C7.17222 2.92578 7.18333 3.21563 7.2 3.5H1.33333C0.594444 3.5 0 4.08516 0 4.8125C0 9.87656 1.86111 13.3984 4.36111 15.7883C6.82222 18.1453 9.82222 19.332 12.0333 19.9336C13.3333 20.2891 14.2222 21.3555 14.2222 22.4273C14.2222 23.5703 13.2778 24.5 12.1167 24.5H10.6667C9.68333 24.5 8.88889 25.282 8.88889 26.25C8.88889 27.218 9.68333 28 10.6667 28H21.3333C22.3167 28 23.1111 27.218 23.1111 26.25C23.1111 25.282 22.3167 24.5 21.3333 24.5H19.8833C18.7222 24.5 17.7778 23.5703 17.7778 22.4273C17.7778 21.3555 18.6611 20.2836 19.9667 19.9336C22.1833 19.332 25.1833 18.1453 27.6444 15.7883C30.1389 13.3984 32 9.87656 32 4.8125C32 4.08516 31.4056 3.5 30.6667 3.5H24.8C24.8167 3.21563 24.8278 2.93125 24.8389 2.63594C24.8944 1.19219 23.6944 0 22.2222 0ZM2.71667 6.125H7.40556C7.91111 11.0523 9.02778 14.3445 10.2889 16.5484C8.90556 15.9469 7.46667 15.0992 6.22222 13.907C4.44444 12.2063 3 9.75078 2.72222 6.125H2.71667ZM25.7833 13.907C24.5389 15.0992 23.1 15.9469 21.7167 16.5484C22.9778 14.3445 24.0944 11.0523 24.6 6.125H29.2889C29.0056 9.75078 27.5611 12.2063 25.7889 13.907H25.7833Z" fill="url(#paint0_linear_0_336)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_0_336" x1="1.53996e-08" y1="20.3137" x2="32.1435" y2="19.5172" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#03F7FD"/>
                                        <stop offset="1" stop-color="#7D23CB"/>
                                    </linearGradient>
                                    <clipPath id="clip0_0_336">
                                        <rect width="32" height="28" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className='text-[24px]'>Rating</span>
                        </Link>


                    </footer>
                </div>
                <div className='absolute rounded-full h-[720px] w-[720px] bg-white z-0' style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(182, 22, 166, 0.2) 0%, rgba(234, 0, 213, 0) 100%)', bottom: '-150px', right:'-150px'}} />
                <div className='absolute rounded-full h-[720px] w-[720px] bg-white z-0' style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(209, 114, 200, 0.2) 0%, rgba(234, 0, 213, 0) 100%)', transform:'translate(-50%, -20%)', left: '50%'}} />
                <div className='absolute rounded-full h-[720px] w-[720px] bg-white z-0' style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(112, 119, 229, 0.5) 0%, rgba(112, 119, 229, 0) 100%)', transform:'translate(-20%, 30%)'}} />
            </div>
        </div>

    )
}
