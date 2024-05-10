import Link from "next/link";
import appData from "@data/app.json";

const DefaultFooter = () => {
  return (
    <footer className="footer-style-one">
        <div className="footer-p-1">
        <div className="container">
            <div className="row">
            <div className="footer-first">
                <div className="footer-logo">
                    <Link href="/">
                        <img src={appData.footer.logo.image} alt={appData.footer.logo.alt} />
                    </Link>
                </div>
                <div className="contact-info d-flex-all">
                    <div className="images d-flex-all justify-content-start">

                    </div>
                    <p>Secure a free estimate <a href="tel:+12053373384" style={{ textDecoration: 'underline', color: 'inherit' }}>+1 (205) 337-3384</a></p>
                </div>
                <Link href="/contact" className="theme-btn">
                Book My Quote <i className="fa-solid fa-angles-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>

        <div className="footer-p-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-col">
                <h3>DJCServices, LLC</h3>
                <p>Elevate your property with Helena's premier construction experts. Act now — for free consultations! Experience elite craftsmanship with DJCServices, LLC.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-col">
                <h3>Contact</h3>
                <ul>
                  <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="79" height="94" viewBox="0 0 79 94"> <defs> <clipPath id="clip-location_B"> <rect width="79" height="94"/> </clipPath> </defs> <g id="location_B" data-name="location B" clipPath="url(#clip-location_B)"> <path id="Path_121" data-name="Path 1" d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z" transform="translate(-922.725 -482.15)"/> <path id="Path_23" data-name="Path 2" d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" transform="translate(25 26)"/> </g> </svg>
                            <p>{appData.footer.info.address}</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62"> <defs> <clipPath id="dasdasdasd"> <rect width="40" height="62"/> </clipPath> </defs> <g id="Mobsdfsdfsdfsdfile" clipPath="url(#dasdasdasd)"> <path id="Path_331" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)"/> <path id="Path_2" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)"/> </g> </svg>
                            <p>
                                      <a href={`tel:${appData.footer.info.tel.replace(/[^0-9+]/g, '')}`}>
                                        {appData.footer.info.tel}
                                      </a>
                                    </p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="102" height="93" viewBox="0 0 102 93"> <defs> <clipPath id="clip-Email_B"> <rect width="102" height="93"/> </clipPath> </defs> <g id="Email_B" data-name="Email B" clipPath="url(#clip-Email_B)"> <path id="Path_1444" data-name="Path 1" d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z" transform="translate(-918 -492)"/> <path id="Path_24" data-name="Path 2" d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z" transform="translate(-918 -492)"/> </g> </svg>
                            <p>
                                      <a href={`mailto:${appData.footer.info.email}`}>
                                        {appData.footer.info.email}
                                      </a>
                                    </p>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C6.48 2 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13h-2v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
        



            </li>
                    </ul>
                </div>
            </div>




            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-col">
                    <h3>Stay Updated</h3>
                    <p>Subscribe for Exclusive Updates and Expert Insights.</p>
                    <form action={appData.settings.mailchimp.url} method="post" target="_blank">
                        <input type="email" name="EMAIL" placeholder="Enter your email." required />
                        <input type="hidden" name={appData.settings.mailchimp.key} />
                        <button type="submit">
                            <i className="fa-solid fa-arrow-up-long" />
                        </button>
                    </form>
                </div>
            </div>

            


            <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
    <div className="footer-col service-areas">
        <h3>Service Areas</h3>
<ul>
    <li><a href="/locations/construction-and-remodeling-services-alabaster-alabama">Alabaster, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-birmingham-alabama">Birmingham, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-cahaba-heights-alabama">Cahaba Heights, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-chelsea-alabama">Chelsea, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-helena-alabama">Helena, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-homewood-alabama">Homewood, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-mountain-brook-alabama">Mountain Brook, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-pelham-alabama">Pelham, AL</a></li>
    <li><a href="/locations/construction-and-remodeling-services-vestavia-hills-alabama">Vestavia Hills, AL</a></li>
</ul>

    </div>
</div>


<div className="col-lg-4 col-md-6 col-sm-12 mt-4">
    <div className="footer-col service-areas">
        <h3>Services</h3>
        <ul>
            <li><a href="/services/basement-and-attic-remodeling-and-constructions-services-in-alabama">Basement & Attic</a></li>
            <li><a href="/services/bathroom-renovation-remodeling-and-constructions-services-in-alabama">Bathroom Renovation</a></li>
            <li><a href="/services/custom-carpentry-remodeling-and-constructions-services-in-alabama">Carpentry</a></li>
            <li><a href="/services/deck-patio-design-alabama">Deck & Patio</a></li>
            <li><a href="/services/drywall-painting-services-alabama">Drywall & Painting</a></li>
            <li><a href="/services/flooring-solutions-alabama">Flooring</a></li>
            <li><a href="/services/home-additions-remodeling-and-constructions-services-in-alabama">Home Additions</a></li>
            <li><a href="/services/kitchen-remodeling-design">Kitchen</a></li>
        </ul>
    </div>
</div>

<div className="col-lg-4 col-md-6 col-sm-12 mt-4">
    <div className="footer-col service-areas">
        <h3>Hours of Operation</h3>
        <ul>
            <li>Sunday: 8:00am - 6:00pm</li>
<li>Monday: 8:00am - 6:00pm</li>
<li>Tuesday: 8:00am - 6:00pm</li>
<li>Wednesday: 8:00am - 6:00pm</li>
<li>Thursday: 8:00am - 6:00pm</li>
<li>Friday: 8:00am - 6:00pm</li>
<li>Saturday: 8:00am - 6:00pm</li>
        </ul>
    </div>
</div>
            
   
    


            </div>
        </div>
        </div>
        <div className="footer-p-3 rights">
        <div className="container">
            <div className="row">
            <div className="footer-col">

            <div className="legal-links">
                <Link href="/terms-and-conditions" legacyBehavior>
                    <a>Terms & Conditions</a>
                </Link>
                <span> | </span> 
                <Link href="/privacy-policy" legacyBehavior>
                <a>Privacy Policy</a>
                </Link>
                <span> | </span> 
                <a href="https://djcservicesllc.com/sitemap-0.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
                </div>
                <span> | </span> 
                <div className="accessibility-link">
                    <Link href="/accessibility-statement" legacyBehavior>
                        <a>Accessibility Statement</a>
                    </Link>
                </div>


                <p dangerouslySetInnerHTML={{ __html: appData.footer.copy }} />

                <div className="social-medias">
                    {appData.social.map((item, key) => (
                    <a href={item.link} target="_blank" key={`fsocial-item-${key}`}>{item.title}</a>
                    ))}
                </div>

                <div className="s">
                <p>Made by  <i class='fa-solid fa-heart'></i> Bham Web Design and SEO Co</p>
                <Link href="https://bhamwebdesignandseoco.com/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">Visit our website</a>
                </Link>
                </div>

                  
            </div>
            </div>
        </div>
        </div>
    </footer>
  );
};
export default DefaultFooter;
