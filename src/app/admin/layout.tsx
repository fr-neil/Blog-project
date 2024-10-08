import Sidebar from '@/components/AdminComponents/Sidebar';
import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='flex'>
                <ToastContainer theme='dark' />
                <Sidebar />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        <Image
                            src={assets.profile_icon}
                            alt=''
                            width={40}
                        ></Image>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
