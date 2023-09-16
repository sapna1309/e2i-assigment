import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-blue-700 h-[50px] flex items-center justify-between'>
        <h2 className='px-4 font-bold text-xl'>LOGO</h2>
        <h2 className='lg:hidden md:hidden sm:flex px-4 font-bold text-xl'>MENU</h2>
   </div>
  )
}

export default Header