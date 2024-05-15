import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

const TermsConditions = () => {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    h1: {
      color: '#2C3E50',
    },
    h2: {
      color: '#34495E',
      marginBottom: '10px',
    },
    p: {
      lineHeight: '1.6',
      marginBottom: '16px',
    },
    ul: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    li: {
      marginBottom: '8px',
    },
    link: {
      color: '#E74C3C',
      textDecoration: 'none',
    }
  };

  return (
    <Layouts>
      <PageBanner pageTitle={"Terms and Conditions"} pageDesc={"The rules you agree to when using our website"} />

      <div style={styles.container}> 
        <h1 style={styles.h1}>Terms and Conditions</h1>

        <p>Welcome to DJCServices, LLC! We are located in Helena, AL and provide premier construction services. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully.</p>

        <h2 style={styles.h2}>Agreement</h2>
        <p>This Agreement ("Agreement") specifies the legally binding terms of your use of the services provided by DJCServices, LLC. By using our services, you agree to these terms and conditions.</p>

        <h2 style={styles.h2}>Privacy</h2>
        <p>Your privacy is important to us. Please read our Privacy Policy, which governs the processing of all personal data collected from you in connection with your purchase of products or services through our site.</p>

        <h2 style={styles.h2}>Communications</h2>
        <p>By creating an account with us, you agree to receive communications from us, including via e-mail, text message, calls, and push notifications. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. You may opt out of receiving communications from us by following the unsubscribe link or instructions provided in any email we send.</p>

        <h2 style={styles.h2}>Services</h2>
        <p>DJCServices, LLC offers construction services, including consultations, planning, and building. All services are subject to acceptance by DJCServices, LLC. We reserve the right to refuse service to anyone for any reason at any time.</p>

        <h2 style={styles.h2}>Consultations</h2>
        <p>We offer free consultations to evaluate your construction needs. To schedule a consultation, please contact us at <a style={styles.link} href="tel:+12055651501">(205) 565-1501</a> or via email at <a style={styles.link} href="mailto:djc.servicesalabama@gmail.com">djc.servicesalabama@gmail.com</a>.</p>

        <h2 style={styles.h2}>Intellectual Property</h2>
        <p>All content included on our site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of DJCServices, LLC or its suppliers and protected by copyright and international copyright laws.</p>

        <h2 style={styles.h2}>Termination</h2>
        <p>We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>

        <h2 style={styles.h2}>Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <h2 style={styles.h2}>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Phone: <a style={styles.link} href="tel:+12055651501">(205) 565-1501</a></li>
          <li style={styles.li}>Email: <a style={styles.link} href="mailto:djc.servicesalabama@gmail.com">djc.servicesalabama@gmail.com</a></li>
          <li style={styles.li}>Address: Helena, AL</li>
        </ul>

      </div>
    </Layouts>
  );
};

export default TermsConditions;
