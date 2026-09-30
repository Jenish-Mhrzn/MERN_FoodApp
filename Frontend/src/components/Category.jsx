import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
      <div className='max-w-[1640px] mx-auto px-4 py-12'>
          <h1 className='font-bold text-4xl text-center text-orange-500 '>Top Rated Menu Items</h1>
          <div className='py-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {categories.map((item) => (
                  <div key={item.id} className='bg-gray-100 rounded-xl flex items-center gap-4 p-4 '>
                      <h2 className='font-bold text-xl'>{item.name}</h2>
                      <img src={item.image} alt="" className='w-20' />
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Category