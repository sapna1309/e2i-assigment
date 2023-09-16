import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/ContextProvider';

const Content = () => {
  const {file,data} = useContext(Context);
  const [content,setContent] = useState(data[0].content);
 
  useEffect(()=>{
    let filteredData = data.filter((el)=>el.filename===file);
    setContent(filteredData[0].content);
  },[file,content])
  return (
    <div className='bg-[#D9D9D9] w-4/5'>
        <p className='font-semibold text-base'>{content}</p>
    </div>
  )
}

export default Content