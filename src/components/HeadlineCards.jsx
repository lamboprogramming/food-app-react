import React from 'react'

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card #1 */}
        <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full text-white bg-black/50 rounded-xl">
            <p className="px-2 pt-4 text-2xl font-bold">No Delivery Fee</p>
            <p className="px-2">Through 12/25</p>
            <button className="absolute mx-2 text-black bg-white border-white bottom-4">Order Now</button>
        </div>
        <img  className="max-h-[160px] md:max=h=[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
        </div>
        {/* Card #2 */}
        <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full text-white bg-black/50 rounded-xl">
            <p className="px-2 pt-4 text-2xl font-bold">New Restaurants</p>
            <p className="px-2">Added Daily</p>
            <button className="absolute mx-2 text-black bg-white border-white bottom-4">Order Now</button>
        </div>
        <img  className="max-h-[160px] md:max=h=[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
        </div>
        {/* Card #3 */}
        <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full text-white bg-black/50 rounded-xl">
            <p className="px-2 pt-4 text-2xl font-bold">Sweet Tooth?</p>
            <p className="px-2">Try A Delicious Snack</p>
            <button className="absolute mx-2 text-black bg-white border-white bottom-4">Order Now</button>
        </div>
        <img  className="max-h-[160px] md:max=h=[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1626379801357-537572de4ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGp1bmslMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards