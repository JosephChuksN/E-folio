import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <div className="bg-gray-100 dark:bg-[#2d3436] dark:bg-gradient-to-r text-gray-900 dark:text-gray-50  from-[#0d1114] to-[#0c0f11] transition-all">

            {children}
            
        </div>
    )
}

export default Background;