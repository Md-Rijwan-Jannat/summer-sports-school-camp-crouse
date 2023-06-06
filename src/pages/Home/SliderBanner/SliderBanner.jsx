import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './SliderBanner.css'

const SliderBanner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50"  src="https://images.metroparent.com/wp-content/uploads/2023/03/0323-MP-TopCampsRoundup3.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://www.cityofevanston.org/home/showpublishedimage/17821/638061976594770000" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/707c536d/iStock-180732669.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_28/1587568/virtual-summer-camp-te-main2-200706.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://www.highgateschool.org.uk/wp-content/uploads/2021/06/Summer-Camp-May-21.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://sarvankashvidyamandir.in/wp-content/uploads/2019/02/cam-img.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1910/lightfieldstudios191010188/131397739-happy-child-holding-chalk-board-with-summer-camp-letters.jpg?ver=6" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full md:h-[700px] xl:h-[1000px] brightness-50" src="https://www.amelio.in/img/summer-camp-ready.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderBanner;