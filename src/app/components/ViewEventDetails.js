import React from 'react'

function ViewEventDetails({viewpopup}) {
  return (
    <div className="h-full w-full backdrop-blur-[2px] absolute left-0 top-0 flex justify-center items-center">
      <div className=" py-4 bg-white rounded-2xl p-2 shadow-xl relative backdrop-blur-xl">
      <div onClick={viewpopup} className='text-4xl rotate-45 absolute -right-7 -top-3 cursor-pointer'>
          +
        </div>
<div className='w-96 flex flex-col  items-center'>
  <img src="/login-bg.jpg" className='w-96 rounded-md' alt="" />
  <h1 className='text-black font-bold text-2xl pt-3'>Nursing Batch</h1>
  <div className='h-56 w-96 pt-2 overflow-y-scroll'>
Lorem ipsum sit amet consectetur adipisicing elit. A adipisci amet ullam, dolores minima et illum dolore. Suscipit, ipsum dolores. Perferendis mollitia, nisi ipsum enim totam laudantium debitis veniam ea? Fugiat molestiae necessitatibus enim similique. Deserunt dolore debitis, distinctio aspernatur reiciendis autem omnis fugit! Quidem consequuntur voluptatem deleniti. Eveniet libero iure incidunt.
  </div>
</div>
      </div> 
      </div>
  )
}

export default ViewEventDetails