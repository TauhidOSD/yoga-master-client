import React from 'react'

const navLinks= [
  {name: 'Home', route:'/'},
  {name: 'Instructor', route: '/instructor'},
  {name: 'Classes', route: '/classes'},
]
const navbar = () => {
  return (
    <nav>
      <div className='lg: w-[95%] mx-auto sm:px-6 lg: px-6'>
          <div className='px-4 py-4 flex items-center justify-center'>
            {/* {logo} */}
              <div>
                <h1 className='text-2xl inline-flex gap-3 items-center font-bold'>YogaMaster <img src="/yoga-logo.png" alt="" className='w-8 h-8' /></h1>
                <p className='font-bold text-[13px] tracking-[8px]'>Quick Explore</p>
              </div>
          </div>
      </div>
    </nav>
  )
}

export default navbar