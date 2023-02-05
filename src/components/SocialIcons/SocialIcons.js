import React from 'react';

const SocialIcons = () => {
    return (
        <div className='bg-[#F0F0F0]'>
            <div className='w-9/12 mx-auto flex justify-between py-5'>
                   <div className='grid grid-cols-4'>
                    <p>Capacity Bulding</p>
                    <p>Research</p>
                    <p>Noticer</p>
                    <p>Covid 19</p>
                   </div>
                   <div className='grid grid-cols-3 gap-7'>
                    <img src="/youtube.svg" alt="" srcset="" className='pt-1'/>
                    <img src="/instagram.svg" alt="" srcset="" />
                    <img src="/facebook.svg" alt="" srcset="" />
                   </div>
            </div>
            
        </div>
    );
};

export default SocialIcons;