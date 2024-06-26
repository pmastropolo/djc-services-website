import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Georgia, serif',
      color: '#2C3E50',
      backgroundColor: '#f9f9f9',
      lineHeight: '1.8',
    },
    h1: {
      color: '#333333',
      fontSize: '36px',
      fontWeight: '700',
      borderBottom: '2px solid #333333',
      paddingBottom: '10px',
      marginBottom: '30px',
    },
    h2: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#333333',
      marginTop: '30px',
      marginBottom: '20px',
    },
    p: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    a: {
      color: '#3498db',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    aHover: {
      color: '#2980b9',
    }
  };

  return (
    <Layouts>
      <PageBanner pageTitle={"Privacy Policy"} pageDesc={"How we handle your personal information"} />

      <div style={styles.container}> 
        <h1 style={styles.h1}>Privacy Policy</h1>
        
        <p style={styles.p}>This Privacy Policy ("Policy") applies to <a href="https://djcservicesllc.com/" style={styles.a}>https://djcservicesllc.com/</a>, and DJCServices, LLC ("Company") and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to the Company include <a href="https://djcservicesllc.com/" style={styles.a}>https://djcservicesllc.com/</a>. The Company's website is a DJCServices LLC stands at the forefront of the remodeling and construction sector in Helena, AL, and its environs. Catering to both residential and commercial clientele, we specialize in a broad spectrum of services from kitchen transformations to complete new constructions. Our team, composed of seasoned professionals, is dedicated to delivering superior craftsmanship and meticulous attention to site. By using the Company website, you consent to the data practices described in this statement.</p>

        <h2 style={styles.h2}>Collection of your Personal Information</h2>
        <p style={styles.p}>In order to better provide you with products and services offered, the Company may collect personally identifiable information, such as your:</p>
        <ul style={styles.ul}>
          <li style={styles.p}>- First and last name</li>
          <li style={styles.p}>- Mailing address</li>
          <li style={styles.p}>- Email address</li>
          <li style={styles.p}>- Phone number</li>
          <li style={styles.p}>- Project details and requirements: Specifics about the type of construction or remodeling services needed. Preferred contact methods and times.</li>
        </ul>
        <p style={styles.p}>If you purchase the Company's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.</p>
        <p style={styles.p}>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through the Company's public message boards, this information may be collected and used by others.</p>
        <p style={styles.p}>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>

        <h2 style={styles.h2}>Use of your Personal Information</h2>
        <p style={styles.p}>The Company collects and uses your personal information in the following ways:</p>
        <ul style={styles.ul}>
          <li style={styles.p}>- to operate and deliver the services you have requested</li>
          <li style={styles.p}>- to provide you with information, products, or services that you request from us</li>
          <li style={styles.p}>- to provide you with notices about your account</li>
          <li style={styles.p}>- to carry out the Company's obligations and enforce our rights arising from any contracts entered between you and us, including for billing and collection</li>
          <li style={styles.p}>- to notify you about changes to our <a href="https://djcservicesllc.com/" style={styles.a}>https://djcservicesllc.com/</a></li>
          <li style={styles.p}>- in any other way we may describe when you provide the information</li>
          <li style={styles.p}>- for any other purpose with your consent</li>
        </ul>
        <p style={styles.p}>The company may also use your personally identifiable information to inform you of other products or services available from the company and its affiliates.</p>
        
       <h2 style={styles.h2}>Sharing Information with Third Parties</h2>
        <p style={styles.p}>The Company does not sell, rent, or lease its customer lists to third parties.</p>
        <p style={styles.p}>The Company may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (email, name, address, phone number) is transferred to the third party. The Company may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to the Company, and they are required to maintain the confidentiality of your information.</p>
        <p style={styles.p}>The Company may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on the Company or the site; (b) protect and defend the rights or property of the Company; and/or (c) act under exigent circumstances to protect the personal safety of users of the Company, or the public.</p>

        <h2 style={styles.h2}>Opt-Out of Disclosure of Personal Information to Third Parties</h2>
        <p style={styles.p}>In connection with any personal information we may disclose to a third party for a business purpose, you have the right to know:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>The categories of personal information that we disclosed about you for a business purpose.</li>
        </ul>
        <p style={styles.p}>You have the right under the California Consumer Privacy Act of 2018 (CCPA) and certain other privacy and data protection laws, as applicable, to opt out of the disclosure of your personal information. If you exercise your right to opt out of the disclosure of your personal information, we will refrain from disclosing your personal information, unless you subsequently provide express authorization for the disclosure of your personal information. To opt out of the disclosure of your personal information, visit this web page <a href="https://djcservicesllc.com/contact" style={styles.a}>https://djcservicesllc.com/contact</a>.</p>

        <h2 style={styles.h2}>Tracking User Behavior</h2>
        <p style={styles.p}>The Company may keep track of the websites and pages our users visit within the Company, in order to determine what the Company services are the most popular. This data is used to deliver customized content and advertising within the Company to customers whose behavior indicates that they are interested in a particular subject area.</p>

        <h2 style={styles.h2}>Automatically Collected Information</h2>
        <p style={styles.p}>The Company may automatically collect information about your computer hardware and software. This information can include your IP address, browser type, domain names, access times, and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding the use of the Company's website.</p>

        <h2 style={styles.h2}>Use of Cookies</h2>
        <p style={styles.p}>The Company's website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.</p>
        <p style={styles.p}>One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the web server that you have returned to a specific page. For example, if you personalize the Company's pages, or register with Company's site or services, a cookie helps the Company to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same website, the information you previously provided can be retrieved, so you can easily use the Company's features that you customized.</p>
        <p style={styles.p}>You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Company's services or websites you visit.</p>

        <h2 style={styles.h2}>Links</h2>
        <p style={styles.p}>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
      
       <h2 style={styles.h2}>Security of your Personal Information</h2>
        <p style={styles.p}>The Company secures your personal information from unauthorized access, use, or disclosure. The Company uses the following methods for this purpose:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>SSL Protocol</li>
          <li style={styles.li}>Secure Payment Processing</li>
        </ul>
        <p style={styles.p}>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</p>
        <p style={styles.p}>We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet that are beyond our control; and (b) the security, integrity, and privacy of any and all information and data exchanged between you and us through this site cannot be guaranteed.</p>

<h2 style={styles.h2}>Right to Deletion</h2>
        <p style={styles.p}>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Delete your personal information from our records; and</li>
          <li style={styles.li}>Direct any service providers to delete your personal information from their records.</li>
        </ul>
        <p style={styles.p}>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
          <li style={styles.li}>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
          <li style={styles.li}>Debug to identify and repair errors that impair existing intended functionality;</li>
          <li style={styles.li}>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
          <li style={styles.li}>Comply with the California Electronic Communications Privacy Act;</li>
          <li style={styles.li}>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
          <li style={styles.li}>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
          <li style={styles.li}>Comply with an existing legal obligation; or</li>
          <li style={styles.li}>Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
        </ul>

        <h2 style={styles.h2}>Children Under Thirteen</h2>
        <p style={styles.p}>The Company does not knowingly collect personally identifiable information from children under the age of 13. If you are under the age of 13, you must ask your parent or guardian for permission to use this <a href="https://djcservicesllc.com/" style={styles.a}>website</a>.</p>

        <h2 style={styles.h2}>Opt Out and Unsubscribe from Third-Party Communications</h2>
        <p style={styles.p}>We respect your privacy and give you an opportunity to opt out of receiving announcements of certain information. Users may opt out of receiving any or all communications from third-party partners of the Company by contacting us here:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Web page: <a href="https://djcservicesllc.com/contact" style={styles.a}>https://djcservicesllc.com/contact</a></li>
          <li style={styles.li}>Email: <a href="mailto:djc.servicesalabama@gmail.com" style={styles.a}>djc.servicesalabama@gmail.com</a></li>
          <li style={styles.li}>Phone: <a href="tel:+12055651501" style={styles.a}>2055651501</a></li>
        </ul>

        <h2 style={styles.h2}>Email Communications</h2>
        <p style={styles.p}>From time to time, the Company may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our services, we may receive a notification when you open an email from the Company or click on a link therein.</p>

  <p style={styles.p}>If you would like to stop receiving marketing or promotional communications via email from the Company, you may opt out of such communications by <a href="#" style={styles.a}>clicking on the unsubscribe button</a>.</p>

        <h2 style={styles.h2}>External Data Storage Sites</h2>
        <p style={styles.p}>We may store your data on servers provided by third-party hosting vendors with whom we have contracted.</p>

        <h2 style={styles.h2}>Changes to This Statement</h2>
        <p style={styles.p}>The Company reserves the right to change this Policy from time to time. For example, when there are changes in our services, changes in our data protection practices, or changes in the law. When changes to this Policy are significant, we will inform you. You may receive a notice by sending an email to the primary email address specified in your account, by placing a prominent notice on our DJCServices, LLC, and/or by updating any privacy information. Your continued use of the website and/or services available after such modifications will constitute your: (a) acknowledgment of the modified Policy; and (b) agreement to abide and be bound by that Policy.</p>

        <h2 style={styles.h2}>Contact Information</h2>
        <p style={styles.p}>The Company welcomes your questions or comments regarding this Policy. If you believe that the Company has not adhered to this Policy, please contact the Company at:</p>
        <p style={styles.p}>
          DJCServices, LLC<br/>
          1054 Chateau Dr<br/>
          Helena, Alabama 35080<br/>
        </p>
        <p style={styles.p}>Email Address: <a href="mailto:djc.servicesalabama@gmail.com" style={styles.a}>djc.servicesalabama@gmail.com</a></p>
        <p style={styles.p}>Phone Number: <a href="tel:+12055651501" style={styles.a}>2055651501</a></p>
        <p style={styles.p}>Effective as of May 15, 2024</p>
        
      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;
