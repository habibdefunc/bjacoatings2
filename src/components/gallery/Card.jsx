// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { card1 } from "../../data/card1";
import { card2 } from "../../data/card2";
import { card3 } from "../../data/card3";
import { card4 } from "../../data/card4";
import { card5 } from "../../data/card5";
import { card6 } from "../../data/card6";
import { card7 } from "../../data/card7";

const Card = () => {
    return (
        <div className="my-12">
            <h1 className="text-center text-4xl font-bold uppercase">
                GALERI KAMI
            </h1>

            <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>

            <div className=" mt-16 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {card1.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image2}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image3}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image4}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image5}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image6}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}

                {card2.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}

                {card3.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image2}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}

                {card4.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image2}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}

                {card5.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image2}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image3}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image4}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image5}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image6}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}

                {card6.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image2}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image3}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image4}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}

                {card7.map((card) => (
                    <div
                        className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
                        key={card.id}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={card.image1}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image2}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image3}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image4}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image5}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={card.image6}
                                    className="slide-img transform object-cover transition-all duration-1000 hover:scale-110"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>

                        <div className="my-6 mx-4">
                            <h3 className="mb-3 text-2xl font-bold">
                                {card.name}
                            </h3>
                            <p>{card.explain}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
