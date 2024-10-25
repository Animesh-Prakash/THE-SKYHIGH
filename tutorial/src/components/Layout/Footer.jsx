import React from 'react';
import Insta from '../Home/img/instagram.svg';
import Facebook from '../Home/img/facebook.svg';
import Yt from '../Home/img/yt.svg';

function Footer() {
    return (
        <>
            <div className='h-[270px] w-[100%] bg-black text-white flex py-5 px-10 relative bottom-0'> 
                <div className='w-[50%] h-[250px] flex flex-col items-start justify-center'>
                    <h1 className='text-2xl font-medium'>Follow Us</h1>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='transition-transform transform hover:scale-110'>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="Instagram" className='w-[35px]' /></a>
                        </div>
                        <div className='transition-transform transform hover:scale-110'>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={Yt} alt="YouTube" className='w-[35px]' /></a>
                        </div>
                        <div className='transition-transform transform hover:scale-110'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" className='w-[35px]' /></a>
                        </div>
                    </div>

                    <div className='my-4'>
                        <div className='text-sm'>Developed by</div>
                        <div className='text-sm'>THE SKYHIGH | Copyright© 2024 | All Rights Reserved</div>
                    </div>
                </div>

                <div className='w-[50%] flex flex-col items-start'>
                    <h1 className='text-2xl font-medium'>@The Skyhigh</h1>
                    <p className='text-sm mt-2'>
                        Dedicated to providing top-notch academic support, The Skyhigh strives to elevate the learning experience for students everywhere.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
