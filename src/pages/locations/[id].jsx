import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import { getSortedLocationsData, getAllLocationsIds, getLocationData, getRelatedLocations } from "@library/locations";

import RelatedLocationsSection from "@components/RelatedLocations";
import CallToActionSection from "@components/sections/CallToAction";

const LocationDetail = ( props ) => {
  
  const postData = props.data;
  let prev_id, next_id, prev_key, next_key = 0;

  props.locations.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })

  props.locations.forEach(function(item, key){
    if ( key == prev_key ) {
      prev_id = item.id;
    }
    if ( key == next_key ) {
      next_id = item.id;
    }
  })

  return (
    <Layouts>
      <PageBanner pageTitle={"Service Areas"} pageDesc={"At DJCservices LLC, we bring your dream spaces to life with warmth, craftsmanship, and a personal touch that makes all the difference."} />

      <section className="gap detail-page page-content">
    <div className="image-container">
      <figure>
        <img src={postData.image} alt={postData.title} />
      </figure>
    </div>


        <div className="container">
          <ul className="next-prev-projects">
            {prev_id != 0 && prev_id != undefined &&
            <li className="prev">
              <Link href={`/locations/${prev_id}`}>
                <i className='fa-solid fa-arrow-left-long' />
              </Link>
            </li>
            }
            {next_id != 0 && next_id != undefined &&
            <li className="next">
              <Link href={`/locations/${next_id}`}>
                <i className='fa-solid fa-arrow-right-long' />
              </Link>
            </li>
            }
          </ul>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pr-dat">
                <div className="heading-style-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="data">
                          <span>DJCservices LLC</span>
                          <h2>{postData.title}</h2>
                        </div>
                      </div>        
                    </div>
                  </div>
                </div>

                {postData.contentHtml != "" &&
                <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                }
                
                {typeof postData.checklist != "undefined" &&
                <>
                  <h3>{postData.checklist.title}</h3>
                  <ul className="include">
                    {postData.checklist.items.map((item, key) => (
                    <li key={`checklist-item-${key}`}><i className="fa-solid fa-check" /> {item}</li>
                    ))}
                  </ul>
                </>
                }

                {typeof postData.details != "undefined" &&
                <div className="row space">
                  {postData.details.items.map((item, key) => (
                  <div key={`details-item-${key}`} className="col-lg-6 col-md-6 col-sm-12"  >
                    <div className="project-d-detail">
                      <div className="data">
                        <h3>{item.label}</h3>
                        <p>{item.value}</p>
                      </div>
                      <div className="d-flex-all icon">
                        <img src={item.icon} alt={item.alt} />
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {typeof postData.slider != "undefined" &&
        <>
          {/* location Detail Slider Start */}
          <div className="gap no-top project-detail-slider">
            <div className="container-fluid g-0">
              <Swiper
                {...sliderProps.projDetailsSlider}
                className="p-d-slider"
              >
                {postData.slider.items.map((item, key) => (
                <SwiperSlide key={`pds-slide-${key}`} className="swiper-slide">
                <figure>
                  <img src={item.image} alt={item.alt} />
                </figure>
                </SwiperSlide>
                ))}
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div>
          {/* location Detail Slider Start */}
        </>
      }

      <RelatedLocationsSection locations={props.related} />

      <CallToActionSection />

    </Layouts>
  );
};
export default LocationDetail;

export async function getStaticPaths() {
    const paths = getAllLocationsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getLocationData(params.id)
    const relatedPosts = await getRelatedLocations(params.id)
    const allLocations = await getSortedLocationsData()

    return {
      props: {
        data: postData,
        related: relatedPosts,
        locations: allLocations
      }
    }
}