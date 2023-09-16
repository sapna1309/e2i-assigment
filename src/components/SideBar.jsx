import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'

const SideBar = () => {

 const {data,setFile} = useContext(Context);   
  return (
    <>
    <div className='w-1/5 bg-[#707070] flex flex-col gap-8 p-4' >
    {data && data?.map((el)=><button key={el.filename} className=' py-2 font-bold text-lg bg-white' name={el.filename} onClick={(e)=>setFile(e.target.name)} >{el.filename}</button>)}
    </div>
    <div></div>
    </>
  )
}

export default SideBar