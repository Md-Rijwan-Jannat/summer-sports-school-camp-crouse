import SectionTitle from "../../../components/Headers/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import useApprovedClass from "../../../components/hooks/useApprovedClass";
import SecondaryButton from "../../../components/SecondaryButton";

const Gallery = () => {
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const [approvedClasses, , refetch] = useApprovedClass();
    refetch();
    return (
        <div>
            <SectionTitle title={'Our Gallery'}></SectionTitle>
            {
                approvedClasses.length === 0 ? <> <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div></> : <>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "space-between" },
                            alignItems: "center",
                            flexDirection: { xs: "column", md: "row" },
                            minHeight: { xs: "400px", md: "300px" },
                        }}
                        className='flex flex-col'
                    >
                        <Box sx={{ width: { xs: "100%", md: "100%" } }}>
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Autoplay]}
                                className="mySwiper"
                                loop={true}
                                autoplay={{ delay: 700 }}
                            >
                                {
                                    approvedClasses?.map((item, index) => <SwiperSlide key={item._id}>
                                        <img
                                            src={item?.image}
                                            alt={`Nature ${index + 1}`}
                                            className=" w-full  h-[250px]  md:h-[320px] rounded-lg"
                                        />
                                        <SecondaryButton title={item.className} />
                                    </SwiperSlide>
                                    )
                                }


                            </Swiper>
                        </Box>
                        <div
                            style={{
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: `${isMediumScreen ? "center right" : "right top"
                                    }`,
                            }}
                            className="py-10 baby relative mt-10 lg:mt-0 mx-5 lg:mx-16 md:pl-8  text-start w-full"
                        >
                            <h2 className="text-xl bg-transparent md:text-2xl pl-2 mb-4 opacity-75">
                                Summer Sports at Our Enriching School Camp.
                            </h2>
                            <p className="text-sm md:text-md bg-transparent md:text-lg text-gray-600 mx-auto max-w-xl">
                                Dates: [Insert Dates]
                                Location: [Insert Location]
                                Ages: [Insert Age Range]
                                Activities: Soccer, Basketball, Swimming, Tennis, and More!
                                Skill Development: Expert Coaching and Training Sessions
                                Team Building: Forge Lifelong Friendships
                                Highlights: Fun Competitions, Adventure Challenges
                            </p>
                        </div>
                    </Box>
                </>
            }

        </div>
    );
};

export default Gallery;