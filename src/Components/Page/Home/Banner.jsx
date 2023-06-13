import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import img from '../../../assets/ban1.jpg'
import img2 from '../../../assets/ban2.jpg'


const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="hero h-[45vh] md:min-h-screen rounded-xl" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className='md:text-5xl text-xl font-bold tracking-wide leading-loose text-white '> <span className="text-blue-500">Aperture Academy</span> Discover the Artistry of Photography</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero h-[45vh] md:min-h-screen rounded-xl" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className='md:text-5xl text-xl font-bold tracking-wide leading-loose text-white'><span className="text-blue-500">Aperture Academy</span> Opening the Door to Photographic Excellence</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;