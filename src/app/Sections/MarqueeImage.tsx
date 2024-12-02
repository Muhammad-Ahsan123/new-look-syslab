import React from 'react';

interface MarqueeImageProps {
    imageSrc: string;
}

function MarqueeImage({ imageSrc }: MarqueeImageProps) {
    return (
        <div className="px-8">
            <img src={imageSrc} alt="" className='sm:h-16 h-14 px-1  sm:px-4 md:px-8 lg:px-12 xl:px-16' />
        </div>
    );
}

export default MarqueeImage;



