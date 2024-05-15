import React from "react";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import "../styles/AccessibilityStatement.css";

const AccessibilityStatement = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle="Accessibility Statement"
        pageDesc="Learn about DJCServices, LLC's commitment to accessible digital experiences for all users."
      />
      <div className="accessibility-page-style">
        <h1 className="accessibility-heading-style-center">Accessibility Statement for DJCServices, LLC</h1>
        <p>
          DJCServices, LLC is committed to ensuring digital accessibility for
          people with disabilities. We are continually improving the user
          experience for everyone and applying the relevant accessibility
          standards.
        </p>

        <h2 className="accessibility-heading-style">Measures to Support Accessibility</h2>
        <p>DJCServices, LLC takes the following measures to ensure accessibility of our website:</p>
          <ul>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Assign clear accessibility goals and responsibilities.</li>
            <li>Employ formal accessibility quality assurance methods.</li>
          </ul>

        <h2 className="accessibility-heading-style">Conformance Status</h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements
          for designers and developers to improve accessibility for people with
          disabilities. It defines three levels of conformance: Level A, Level
          AA, and Level AAA. Our website is partially conformant with WCAG 2.1
          level AA. Partially conformant means that some parts of the content do
          not fully conform to the accessibility standard.
        </p>

        <h2 className="accessibility-heading-style">Feedback</h2>
        <p>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on our site:</p>
        <ul>
          <li>Phone: (205) 565-1501</li>
          <li>
            E-mail: <a href="mailto:djc.servicesalabama@gmail.com" className="accessibility-link-style">djc.servicesalabama@gmail.com</a>
          </li>
          <li>Visitor address: Helena, AL</li>
        </ul>

        <h2 className="accessibility-heading-style">Compatibility with Browsers and Assistive Technology</h2>
        <p>Our website is designed to be compatible with the following assistive technologies:</p>
        <p>Our website is designed to be compatible with recent versions of major web browsers like Chrome, Firefox, Safari, and Edge. It is not compatible with browsers older than 3 major versions or mobile operating systems older than 5 years.</p>

        <h2 className="accessibility-heading-style">Technical Specifications</h2>
        <p>Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
        <ul>
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h2 className="accessibility-heading-style">Limitations and Alternatives</h2>
        <p>
          Despite our best efforts to ensure accessibility of our website, there
          may be some limitations. Below is a description of known limitations,
          and potential solutions. Please contact us if you observe an issue not
          listed below.
        </p>
        <ul>
          <li>
            Known limitations: Certain video content lacks captions, potentially
            making it difficult for users with hearing impairments to fully
            access the information.
          </li>
          <li>
            Alternatives: We are actively working to add captions to all video
            content. In the meantime, please contact us for alternative formats.
          </li>
          <li>
            Instructions on how to report issues: Please email us at{" "}
            <a href="mailto:djc.servicesalabama@gmail.com" className="accessibility-link-style">djc.servicesalabama@gmail.com</a> or call us at{" "}
            <a href="tel:+12055651501" className="accessibility-link-style">(205) 565-1501</a> to report any accessibility issues you encounter. Your feedback helps us improve our site for everyone.
          </li>
        </ul>

        <h2 className="accessibility-heading-style">Assessment Approach</h2>
        <p>DJCServices, LLC assessed the accessibility of our website by the following approaches:</p>
        <ul>
          <li>Self-evaluation: the site was last evaluated on 05/06/2024.</li>
          <li>
            External evaluation: We engaged with Accessible Web Inc., a
            consultancy specializing in web accessibility, to ensure our
            compliance with WCAG 2.1 guidelines.
          </li>
        </ul>

        <h2 className="accessibility-heading-style">Formal Approval of This Accessibility Statement</h2>
        <p>This Accessibility Statement is approved by:</p>
        <ul>
          <li>DJCServices LLC</li>
          <li>Dennis Carlisle | Owner of DJCservices</li>
          <li>Date: 05/06/2024</li>
        </ul>

        <h2 className="accessibility-heading-style">Formal Complaints</h2>
        <p>
          We aim to respond to accessibility feedback within 3-7 business days,
          and to propose a solution within 30 business days. If you are not
          satisfied with our response to your complaint, you can escalate it to
          our complaints handling department or regulatory body using the
          contact details given above.
        </p>
      </div>
    </Layouts>
  );
};

export default AccessibilityStatement;
