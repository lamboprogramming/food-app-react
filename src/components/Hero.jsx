import React from 'react';

const Hero = () => {
  return (
    <div className="max-w=[1640px] mx-auto p-4">
        <div className="max-h=[500px] relative">
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                <h1 className="px-4 font-bold text-4l sm:text-5xl md:6xl lg:text-7xl">The <span className="text-orange-500">Best</span></h1>
                <h1 className="px-4 font-bold text-4l sm:text-5xl md:6xl lg:text-7xl"><span  className="text-orange-500" >Foods</span> Delivered</h1>
            </div>
            <img className="w-full max-h-[500px] object-cover" src="https://images.unsplash.com/photo-1580342491945-d430840a0e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG55Y3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
        </div>
    </div>
  );
}

export default Hero;
