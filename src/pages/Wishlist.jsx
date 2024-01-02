import React from 'react'

function Wishlist() {
  return (

    <div className='wishlist-container pt-8 px-10'>
  
            <div  className='product-container w-full rounded shadow-xl p-4 flex items-center justify-between'>
                <div className='product-detail flex items-center justify-start gap-4'>
                    <img src='https://image.tmdb.org/t/p/original/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg' alt="" className='h-28' />
                    <div className="flex flex-col gap-1 items-start justify-between">
                        <h4 className='text-xl font-normal'>Title</h4>
                        <p className='text-xs font-normal'>description</p>
                        <p className='text-xs font-normal'>Created : createdAt</p>
                        <h4 className='text-xl'>₹ price</h4>
                    </div>
                </div>
                <button><img src="/icons/trash.png"  alt="" className='w-8' /></button>
            </div>
      
</div>

  )
}

export default Wishlist