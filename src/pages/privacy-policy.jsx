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
      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;
