import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect } from 'react';
import SecondaryButton from '../../../components/SecondaryButton';



const SliderBanner = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        autoplay: true,
        duration: 500, // Set the duration for each slide in milliseconds
    });

    useEffect(() => {
        const autoplayInterval = setInterval(() => {
            slider.next();
        }, 500);

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [slider]);
    return (
        <div ref={sliderRef} className="keen-slider scroll-auto mb-5 md:mb-16 pt-[200px]">

            <div className="relative keen-slider__slide h-[250px] md:h-[500px] b-0 banner">
                <img src="https://img.freepik.com/premium-photo/international-sports-day-6-april_10221-18936.jpg" className="w-full bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950 to-blue-400 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white p-10">
                    <h1 className="text-2xl md:text-6xl font-sans text-[#1b92c4] font-bold mb-4">Welcome to our Summer Sports School Camp</h1>
                    <p className="text-sm text-gray-600 font-sans md:text-lg mb-6"> Get ready for a summer packed with outdoor adventures, team sports, and friendly competition. Develop your skills, build confidence, and have a blast in the sun</p>
                    <SecondaryButton title={'About'}></SecondaryButton>
                </div>
            </div>
            <div className="relative keen-slider__slide h-[250px] md:h-[500px] b-0 banner">
                <img src="https://media.istockphoto.com/id/1355687160/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=SXCgXww7veX8n9fwf_fqEu18ZmdrNG3dPNrfbZFOnns=" alt="Banner Image" className="w-full bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950 to-blue-400 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white p-10">
                    <h1 className="text-2xl md:text-6xl font-sans text-[#1b92c4] font-bold mb-4">All-Star Summer Sports Academy</h1>
                    <p className="text-sm text-gray-600 font-sans md:text-lg mb-6">Join us for a summer filled with sports, games, and endless fun! Explore a variety of sports and activities while making new friends and creating lasting memories.</p>
                    <SecondaryButton title={'Learn More'}></SecondaryButton>
                </div>
            </div>
            <div className="relative keen-slider__slide h-[250px] md:h-[500px] b-0 banner">
                <img src="https://media.istockphoto.com/id/186157161/photo/sports-equipment-detail.jpg?s=612x612&w=0&k=20&c=uSQZzgmlRFm4kD6Ufl1Y5dDrHqffeR_UWMDLoHssYp4=" className="w-full bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950 to-blue-400 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white p-10">
                    <h1 className="text-2xl md:text-6xl font-sans text-[#1b92c4] font-bold mb-4">Sizzling Summer Sports School</h1>
                    <p className="text-sm text-gray-600 font-sans md:text-lg mb-6"> Embark on an exciting sports journey this summer! Experience thrilling challenges, learn new sports, and conquer obstacles while discovering the joys of teamwork and personal growth.</p>
                    <SecondaryButton title={'Contact'}></SecondaryButton>
                </div>
            </div>
            <div className="relative keen-slider__slide h-[250px] md:h-[500px] b-0 banner">
                <img src="https://media.istockphoto.com/id/511438257/photo/assorted-sports-equipment.jpg?s=170667a&w=0&k=20&c=7yNxLhWIIl6yH4X6Fx81-Yt4Wv1XleCqx69thJ8RWT8=" className="w-full bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950 to-blue-400 opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-5 md:ml-16 md:w-4/5 text-white p-10">
                    <h1 className="text-2xl md:text-6xl font-sans text-[#1b92c4] font-bold mb-4">Play, Learn, and grow Summer Sports Camp</h1>
                    <p className="text-sm text-gray-600 font-sans md:text-lg mb-6">Sunshine Sports Camp: Embrace the sunshine and get moving this summer! Our camp offers a blend of classic and unique sports.</p>
                    <SecondaryButton title={'Buy Now'}></SecondaryButton>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;
