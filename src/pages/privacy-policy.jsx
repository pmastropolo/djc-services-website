import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

const PrivacyPolicy = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Privacy Policy"} pageDesc={"Learn how we handle your data"} />

      <div style={{ padding: '20px' }}> 
        <h1>Privacy Policy</h1>

        <p>Welcome to our Privacy Policy page! When you use our services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.</p>



      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;