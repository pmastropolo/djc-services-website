import Layouts from "@layouts/Layouts";
import Link from "next/link";


import { getSortedLocationsData } from "@library/locations";

import RenovationSection from "@components/sections/Renovation";

import CallToActionSection from "@components/sections/CallToAction";

import PageBanner from "@components/PageBanner";

const ServiceAreas = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Service Areas"} pageDesc={"Service Areas"} />

      {/* Our Locations Two Start */}
      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {props.locations.map((item, key) => (
            <div key={`locations-item-${key}`} className="col-lg-6">
              <div className="project-post">

                <div className="project-data">
                    <h3><Link href={`/locations/${item.id}`}>{item.title}</Link></h3>
                    <p>{item.short}</p>
                    <Link className="location-icon" href={`/locations/${item.id}`}>
                      <i className="fa-solid fa-angles-right" />
                    </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

       
      </section>
      {/* Our location Two End */}

      <RenovationSection />

      <CallToActionSection />
      
    </Layouts>
  );
};
export default ServiceAreas;

export async function getStaticProps() {
  const allLocations = getSortedLocationsData();

  return {
    props: {
      locations: allLocations
    }
  }
}