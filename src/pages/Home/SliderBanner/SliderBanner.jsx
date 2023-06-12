import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SliderBanner = () => {
    const [sliderRef] = useKeenSlider()
    return (
        <div ref={sliderRef} className="keen-slider mb-5 md:mb-16">

            <div className="relative keen-slider__slide h-[250px] md:h-[500px] lg:h-[700px] b-0">
                <img src="https://media.istockphoto.com/id/1355687160/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=SXCgXww7veX8n9fwf_fqEu18ZmdrNG3dPNrfbZFOnns=" alt="Banner Image" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-l from-black to-blue-200 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white">
                    <h1 className="text-2xl md:text-7xl font-bold mb-4">Welcome to our Summer School Sports Camp</h1>
                    <p className="text-sm md:text-lg mb-6">Join us for a summer filled with sports, games, and endless fun! Explore a variety of sports and activities while making new friends and creating lasting memories.</p>
                    <button className="bg-gray-100 bg-opacity-30 text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 border hover:bg-opacity-30 hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="relative keen-slider__slide h-[250px] md:h-[500px] lg:h-[700px] b-0">
                <img src="https://img.freepik.com/premium-photo/international-sports-day-6-april_10221-18936.jpg" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-l from-black to-blue-200 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white">
                    <h1 className="text-2xl md:text-7xl font-bold mb-4">All-Star Summer Sports Academy</h1>
                    <p className="text-sm md:text-lg mb-6"> Get ready for a summer packed with outdoor adventures, team sports, and friendly competition. Develop your skills, build confidence, and have a blast in the sun</p>
                    <button className="bg-gray-100 bg-opacity-30 text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 border hover:bg-opacity-30 hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="relative keen-slider__slide h-[250px] md:h-[500px] lg:h-[700px] b-0">
                <img src="https://media.istockphoto.com/id/186157161/photo/sports-equipment-detail.jpg?s=612x612&w=0&k=20&c=uSQZzgmlRFm4kD6Ufl1Y5dDrHqffeR_UWMDLoHssYp4=" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-l from-black to-blue-200 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white">
                    <h1 className="text-2xl md:text-7xl font-bold mb-4">Sizzling Summer Sports School</h1>
                    <p className="text-sm md:text-lg mb-6"> Embark on an exciting sports journey this summer! Experience thrilling challenges, learn new sports, and conquer obstacles while discovering the joys of teamwork and personal growth.</p>
                    <button className="bg-gray-100 bg-opacity-30 text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 border hover:bg-opacity-30 hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="relative keen-slider__slide h-[250px] md:h-[500px] lg:h-[700px] b-0">
                <img src="https://media.istockphoto.com/id/511438257/photo/assorted-sports-equipment.jpg?s=170667a&w=0&k=20&c=7yNxLhWIIl6yH4X6Fx81-Yt4Wv1XleCqx69thJ8RWT8=" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-l from-black to-blue-200 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white">
                    <h1 className="text-2xl md:text-7xl font-bold mb-4">Play, Learn, and grow Summer Sports Camp</h1>
                    <p className="text-sm md:text-lg mb-6">Sunshine Sports Camp: Embrace the sunshine and get moving this summer! Our camp offers a blend of classic and unique sports.</p>
                    <button className="bg-gray-100 bg-opacity-30 text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 border hover:bg-opacity-30 hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;




// import React from 'react';

// const Banner = () => {
//     return (
//         <div className="relative">
//             <img src="banner-image.jpg" alt="Banner Image" className="w-full h-auto" />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-50"></div>
//             <div className="absolute inset-0 flex flex-col justify-center items-cenmd:ter text-white">
//                 <h1 className="text-2xl font-bold mb-4">Welcome to our Sports Camp</h1>
//                 <p className="text-sm md:text-lg mb-6">Join us for an exciting summer filled with sports activities!</p>
//                 <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
//                     Learn More
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Banner;
