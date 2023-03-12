import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import  { Autoplay, Pagination, Navigation } from "swiper";

const Bannerslider = () =>{
    return(
        <section>
            <div className="container !p-0 md:!px-4 md:mb-12">
            {/* <StaticImage
                  src="../img/banners/banner-blupura.png"
                  alt="Blupura"
                  placeholder="none"
                /> */}
            <Swiper
             spaceBetween={30}
             centeredSlides={true}
             speed={1000}
             autoplay={{
               delay: 4000,
               disableOnInteraction: false,
             }}
             pagination={{
               clickable: true,
             }}
             navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
        >
          <SwiperSlide> <StaticImage
                  src="../img/banners/banner-blupura.png"
                  alt="Blupura"
                  placeholder="none"
                /></SwiperSlide>
                 <SwiperSlide> <StaticImage
                  src="../img/banners/banner-activewhere.png"
                  alt="Activewhere"
                  placeholder="none"
                /></SwiperSlide>
                 <SwiperSlide> <StaticImage
                  src="../img/banners/banner-definitivo.png"
                  alt="Activewhere"
                  placeholder="none"
                /></SwiperSlide>
        </Swiper>
            </div>
        
      </section>
    )
}

export default Bannerslider