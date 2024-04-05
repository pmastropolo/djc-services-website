import Link from "next/link";

const RelatedLocations = ({ locations }) => {
  return (
    <>
      <section className="gap no-top project-style-one extra addition">
        <div className="heading">
          <figure>
            <img src="/img/re.png" alt="DJCservices Logo Header Icon" />
          </figure>
          <span>DJCservices LLC</span>
          <h2>Related Locations</h2>
        </div>
        <div className="container">
          <div className="row project-slider">
            {locations.slice(0, 2).map((item, key) => (
           <div key={`locations-item-${key}`} className="col-lg-6">
           <div className="location-card">
             <figure>
               <img className="location-image" src={item.image} alt={item.title} />
             </figure>
             <div className="location-content">
               <h3 className="location-title">
                 <Link href={`/locations/${item.id}`}>{item.title}</Link>
               </h3>
               <p className="location-description">{item.short}</p>
               <Link className="location-link" href={`/locations/${item.id}`}>
                 <i className="fa-solid fa-angles-right" />
               </Link>
             </div>
           </div>
         </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default RelatedLocations;