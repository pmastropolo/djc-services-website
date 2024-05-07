import React from 'react';
import Data from "@data/sections/contact-form.json";
import Accordion from 'react-bootstrap/Accordion';

const ContactFormSection = () => {
    return (
        <section className="contact-form-one">
            <div className="heading">
                <figure>
                    <img src="/img/re.png" alt="heading-icon" />
                </figure>
                <span>{Data.subtitle}</span>
                <h2>{Data.title}</h2>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" >
                        <div className="acc2">
                            <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                                {Data.items.map((item, key) => (
                                    <Accordion.Item key={`contact-item-${key}`} eventKey={`contact-acc-${key}`}>
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>
                                            <p>{item.text}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="c-form-2">
                            {/* Embedding the Mailchimp form */}
                            <iframe 
                                src="https://eepurl.com/iO17SU" 
                                width="100%" 
                                height="1340px" 
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                frameBorder="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;