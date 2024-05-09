import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

const Login = () => {
  useEffect(() => {
    netlifyIdentity.init();  // Initialize the Netlify Identity widget

    // Add login event listener
    const handleLogin = user => {
      netlifyIdentity.close();  // Close the modal once the user is logged in
      window.location.href = '/dashboard';  // Redirect to the dashboard
    };
    netlifyIdentity.on('login', handleLogin);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      netlifyIdentity.off('login', handleLogin);
    };
  }, []);

  return (
    <Layouts>
      <PageBanner pageTitle="Sign Up or Login" pageDesc="Access your account to manage your projects and preferences." />
      <section className="gap login-register">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <figure>
                  <img src="/img/footer-small-mini-djc-services-logo.png" alt="DJCServices LLC Construction and Remodeling Heading Logo Icon" />
                </figure>
                <span>Manage your account</span>
                <h2>Sign In or Register</h2>
              </div>
              <div className="faqs">
                <div className="question">
                  <h3>Log In with Ease</h3>
                  <p>After registration, use your email and password to keep track of your projects.</p>
                </div>
                <div className="question">
                  <h3>Paperless Billing</h3>
                  <p>Switch to paperless billing easily by updating your preferences in the My Details section of your account.</p>
                </div>
                <div className="question">
                  <h3>Benefits of Registering:</h3>
                  <ul>
                    <li><i className="fa-solid fa-chevron-right" /> View and manage your account balance</li>
                    <li><i className="fa-solid fa-chevron-right" /> Make secure payments quickly</li>
                    <li><i className="fa-solid fa-chevron-right" /> Update personal and billing information conveniently</li>
                    <li><i className="fa-solid fa-chevron-right" /> Opt-in for paperless billing and direct email invoices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box login">
                <h3>Log In Your Account</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" name="email" placeholder="Username or email address" />
                  <input type="password" name="password" placeholder="Password" />
                  <div className="remember">
                    <div className="first">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <div className="second">
                      <a href="#" onClick={(e) => {
                        e.preventDefault();
                        netlifyIdentity.open('login');
                        setTimeout(() => {
                          const forgotPasswordLink = document.querySelector('[data-netlify-identity-forgot-password]');
                          if (forgotPasswordLink) {
                            forgotPasswordLink.click();
                          }
                        }, 1000);
                      }}>Forgot your Password?</a>
                    </div>
                  </div>
                  <button type="button" className="theme-btn" onClick={() => netlifyIdentity.open("login")}>
                    <i className="fa-solid fa-angles-right" /> Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box register">
                <div className="parallax" style={{ backgroundImage: "url(/images/pattern.png)" }} />
                <h3>Create Your Account</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" name="text" placeholder="Full name" required />
                  <input type="email" name="email" placeholder="Email address" required />
                  <input type="password" name="password" placeholder="Create a password" required />
                  <p>Your personal data will be used to enhance your experience on our site, manage access to your account, and for other purposes as outlined in our <a href="/privacy-policy">privacy policy</a>.</p>
                  <button type="button" className="theme-btn" onClick={() => netlifyIdentity.open("signup")}>
                    <i className="fa-solid fa-angles-right" /> Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Login;
