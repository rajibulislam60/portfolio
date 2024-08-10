import React from 'react'

const Title = ({titleName, titleItem}) => {
  return (
    <div className='text-center'>
      <h3 className="font-normal text-[20px]">{titleName}</h3>
      <h2 className="uppercase text-[65px] leading-1.7 font-bold mt-[16px]">
        {titleItem}
      </h2>
    </div>
  );
}

export default Title