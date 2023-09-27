import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { throttle } from 'lodash';
import { faMessage } from '@fortawesome/free-regular-svg-icons';



function Aside() {
    // top 함수
    const moveToTop = () => (document.documentElement.scrollTop = 0);
    
  return (
    <>
    {/* aside */}

    <ul className="aside fixed bottom-4 -right-[70px] w-[200px] align-middle">
        <li className="w-[60px] h-[60px] mb-[6px] shadow-lg
 bg-[#ffffff] rounded-full text-center">
<FontAwesomeIcon className='text-[20px] mt-5 text-[#6fed8a]' icon={faMessage} />

 </li>
        <li className="w-[60px] h-[60px]  mb-[6px] shadow-lg  bg-[#ffffff] rounded-full text-center">
                    <FontAwesomeIcon className='text-[24px] mt-4 text-[#6fed8a]' icon={faInstagram} />
        </li>
        <li onClick={moveToTop} className="transition duration-600 ease-out w-[60px] h-[60px] shadow-lg mb-[6px]  bg-[#ffffff] rounded-full text-center">
                     <FontAwesomeIcon className='mt-5' icon={faChevronUp} />
        </li>
      </ul>
    </>
  )
}

export default Aside