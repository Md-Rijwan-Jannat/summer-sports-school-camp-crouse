import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const SliderBanner = () => {
    const [sliderRef] = useKeenSlider()
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/873a7094905625.5e8ab41cc80f6.png" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://img.freepik.com/free-vector/gradient-halftone-basketball-twitch-banner_23-2149346315.jpg" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://img.freepik.com/free-psd/rugby-sports-horizontal-banner_23-2149041451.jpg" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://img.freepik.com/premium-vector/man-basketball-banner-red-sports-banner-design-premium-template-vector_356357-71.jpg" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sports-and-tech-banner-design-template-b60eb30e679bdd78cde37d835c83f5c1_screen.jpg?ts=1622169623" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/11702443/original/a69080b5ff09830ad7a89c9a93fb72077bd5dbd1/design-professional-web-banner-header-ad-cover-in-16-hr.jpg" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://www.uksoccershop.com/blog/wp-content/uploads/2016/09/thailand-2016-17-kits-banner.jpg" alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className='w-full md:h-[700px]' src="https://i.pinimg.com/originals/b7/4c/1a/b74c1a5dd2393de5c52d7628b9b4aeda.jpg" alt="" />
            </div>
        </div>
    );
};

export default SliderBanner;