import { useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner pageTitle={"Construction & Remodeling Services"} pageDesc={"Where Design Meets Durability"} />

      <ServicesSection />

      {/* Construction Services Start */}
      <section className="gap no-top construction-services">
        <div className="container">
          <Tab.Container id="services-tab-content" defaultActiveKey="tab-service-0">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="services-nav">
                <h2>Our Services</h2>
                <Nav variant="pills" className="nav nav-pills mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-0">Bathroom Renovation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-1">Carpentry</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-2">Deck & Patio Installation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-3">Flooring</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-4">Kitchen Renovation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-4">Other Renovation Services</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              <Tab.Content>
                <Tab.Pane eventKey="tab-service-0" title="General Contracting">
                  <figure>
                    <img className="w-100" src="/img/services-banner-bathroom.png" alt="Services Nav Image 1" />
                    <figcaption>
                    <h3>Bathroom Renovation</h3>
                    <p>Revamp your bathroom with our top-tier remodeling. Custom designs, expert construction, luxurious results, budget-friendly.</p>
                    </figcaption>

                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-1" title="Construction Consultant">
                  <figure>
                    <img className="w-100" src="/img/services-carpentry-banner.png" alt="Services Nav Image 2" />
                    <figcaption>
                      <h3>Carpentry</h3>
                      <p>From bespoke furniture to comprehensive home renovations, we specialize in custom woodworking for exquisite results.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-2" title="Metal Roofin">
                  <figure>
                    <img className="w-100" src="/img/services-deck-and-patio.png" alt="Services Nav Image 3" />
                    <figcaption>
                      <h3>Deck & Patio Installation</h3>
                      <p>Crafted for entertainment and relaxation, our premium services ensure stunning, versatile spaces tailored to your lifestyle.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-3" title="House Renovation">
                  <figure>
                    <img className="w-100" src="/img/services-flooring.png" alt="Services Nav Image 4" />
                    <figcaption>
                      <h3>Flooring</h3>
                      <p>From hardwood to tile, we offer expert installations. Experience unmatched craftsmanship tailored to your unique style.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-4" title="Green Building">
                  <figure>
                    <img className="w-100" src="/img/services-kitchen.png" alt="Services Nav Image 5" />
                    <figcaption>
                      <h3>Kitchen Renovation</h3>
                      <p>From countertops to cabinetry, we specialize in crafting culinary masterpieces. Experience personalized design and expert craftsmanship tailored to your style.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}


      {/* Video PopUp Start */}
      <div className="video-popup">
        <div className="container-fluid g-0">
          <div className="row">
            <figure>
              <img className="w-100" src="/img/construction.jpeg" alt="Video PopUp Image" />
            </figure>
            <a className="video-play-btn" onClick={() => setOpen(true)} style={{"cursor": "pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="56" viewBox="0 0 35 56"> <defs> <clipPath id="clip-video_arrow"> <rect width="35" height="56"/> </clipPath> </defs> <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)"> <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)"/> <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)"/> </g> </svg>
            </a>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId="uemObN8_dcw" onClose={() => setOpen(false)} />
      {/* Video PopUp Start */}

      {/* Service Style Two Start */}
      <section className="gap service-style-two">
        <div className="heading">
          <figure>
            <img src="/img/fff.png" alt="heading-icon" />
          </figure>
          <span>Construction and Remodeling</span>
          <h2>Premium Services</h2>

        </div>
        <div className="container">
          <div className="row g-0">
            {props.services.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
              <div className="service-two-box">
                <h3><Link href={`/services/${item.id}`}>{item.title}</Link></h3>
                <p>{item.short}</p>
                <div className="service-two-icon d-flex-all justify-content-start">
                  <img src={item.image} alt={item.title} />
                  <Link href={`/services/${item.id}`}>
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Style Two End */}
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}