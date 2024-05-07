import Data from "@data/sliders/projects.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ProjectsSlider = ({ projects }) => {
    return (
        <section className="gap project-style-one light-bg-color">
            <div className="heading">
                <figure>
                    <img src="/img/footer-small-mini-djc-services-logo.png" alt="DJCServices LLC Brand Logo" />
                </figure>
                <span>{Data.subtitle}</span>
                <h2>{Data.title}</h2>
            </div>
            <div className="container">
                <Swiper
                    {...sliderProps.projectsSlider}
                    className="swiper-container project-slider"
                    slidesPerView={1} // Always display one project per view
                    breakpoints={{
                        768: {
                            slidesPerView: 2 // Set slidesPerView to 2 for screens larger than 768px
                        }
                    }}
                >
                    {projects.slice(0, Data.numOfItems).map((item, key) => (
                        <SwiperSlide key={`pjs-slide-${key}`} className="swiper-slide">
                            <div className="project-post">
                                <figure>
                                    <img src={item.image} alt={item.title} />
                                </figure>
                                <div className="project-data">
                                    <h3><Link href={`/projects/${item.id}`}>{item.title}</Link></h3>
                                    <p>{item.short}</p>
                                    <Link className="project-icon" href={`/projects/${item.id}`}>
                                        <i className="fa-solid fa-angles-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination" />
                </Swiper>
            </div>

            <style jsx>{`
            @media screen and (max-width: 767px) {
                    .project-post {
                        border-radius: 0;
                        box-shadow: none;
                    }
                }
            `}</style>
            
        </section>
    );
};

export default ProjectsSlider;