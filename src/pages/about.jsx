import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import RenovationSection from "@components/sections/Renovation";
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About DJCservices LLC"} pageDesc={"No job to big or small, just give me a call!"} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Alabama's Choice for Construction & Remodeling</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>About</h3>
                  <p>DJCservices LLC stands at the forefront of the remodeling and construction sector in Helena, AL, and its environs. Catering to both residential and commercial clientele, we specialize in a broad spectrum of services from kitchen transformations to complete new constructions. Our team, composed of seasoned professionals, is dedicated to delivering superior craftsmanship and meticulous attention to detail. We utilize only the finest materials, ensuring our commitment to the utmost in customer satisfaction.</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/i.png" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>Discover the Benefits:</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> Bonded</li>
                    <li><i className="fa-solid fa-circle-dot" /> Family Owned</li>
                    <li><i className="fa-solid fa-circle-dot" /> Emergency Services</li>
                    <li><i className="fa-solid fa-circle-dot" /> Locally Owned</li>
                    <li><i className="fa-solid fa-circle-dot" /> Insured</li>
                    <li><i className="fa-solid fa-circle-dot" /> Licensed Helena, AL</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/about-image.png" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/img/djc-services-llc-mini-logo.png" alt="Heading Icon DJCservices LLC Construction and Remodeling Alabama" />
          </figure>
          <span>Construction and Remodeling Process</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/about-background-banner-image.png" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Consultation</h3>
                <p>We start with understanding your goals, vision, needs and budget.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Preparation</h3>
                <p>Handling paperwork and logistics ensures a smooth start.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Construction</h3>
                <p>Our experienced team brings your vision to life with precision.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Finalization</h3>
                <p>Meticulous attention to detail ensures quality and exceeds expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/key-benefit.png" alt="Transformative Key Benefits of DJC Services LLC: Customized Solutions for Durable, Stylish Spaces" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>Key Benefits</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>DJC Services LLC transforms ideas into durable, stylish spaces.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Customized to match your style and needs, every project stands out.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>From kitchen updates to new builds, all your construction needs are covered.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Clear communication and careful planning make every project smooth and satisfying.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

{/* Core Values Start */}
<section className="gap no-top core-values">
  <div className="heading">
    <figure>
      <img src="/img/footer-small-mini-djc-services-logo.png" alt="DJCSerices LLC Construction and Remodeling Alabama" />
    </figure>
    <span>Design | Build | Inspire</span>
    <h2>Our Core Values</h2>
  </div>
  <div className="container">
    <div className="row">
      <ul>
        <li>
          <div className="data">
            <h3>Design</h3>
            <p>Functionality and innovation drive our designs, creating spaces that exceed expectations.</p>
          </div>
          <div className="image">
            <figure>
              <img className="w-100" src="/img/core-values/core-values-design-banner-image.png" alt="Core Values Image 1 | Design | DJC Services LLC" />
            </figure>
          </div>
        </li>
        <li>
          <div className="image">
            <figure>
              <img className="w-100" src="/img/core-values/core-values-build-banner-image.png" alt="Core Values Image 2 | Build | DJC Services LLC" />
            </figure>
          </div>
          <div className="data">
            <h3>Build</h3>
            <p>Our craftsmanship ensures quality construction that stands the test of time.</p>
          </div>
        </li>
        <li>
          <div className="data">
            <h3>Inspire</h3>
            <p>We aim to inspire through excellence, integrity, and a commitment to community.</p>
          </div>
          <div className="image">
            <figure>
              <img className="w-100" src="/img/core-values/core-values-inspire.png" alt="Core Values Image 3 | Inspire | DJC Services LLC" />
            </figure>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
{/* Core Values End */}


      <RenovationSection />

      <TestimonialSlider />
      
    </Layouts>
  );
};
export default About;