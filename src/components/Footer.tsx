import React from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='' width={120} />
            <p className='text-white text-sm'>© 2024 All rights reserved.</p>
            <div className='flex gap-4'>
                <Image src={assets.googleplus_icon} alt='' width={40} />
                <Image src={assets.facebook_icon} alt='' width={40} />
                <Image src={assets.twitter_icon} alt='' width={40} />
            </div>
        </div>
    );
};

export default Footer;
