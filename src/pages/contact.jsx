import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const faqData = {
      "items": [
          {
              "title": "What's the best way to reach you?",
              "text": "Give us a call or send us a text at (205) 337-3384. Thanks!"
          },
          {
              "title": "Do you provide free estimates?",
              "text": "Yes, we'll always estimate the job for free. Just give us a call to get started."
          },
          {
              "title": "How long will my project take?",
              "text": "Each project is unique, so timelines can vary. Rest assured, we’ll map out all the details and share a clear timeline with you once we get a good look at your plans!"
          },
          {
              "title": "How are you different?",
              "text": "We are a customer-first company that will do whatever it takes to make sure the job is well done."
          }
      ]
    };
  
    const servicesOffered = [
      "Bathroom Renovation",
      "Carpentry",
      "Deck & Patio Installation",
      "Flooring",
      "Kitchen Renovation",
      "Other Repair Services",
      "Other"
    ];

    return (
        <Layouts>
            <PageBanner pageTitle={"Contact"} pageDesc={"No job too big or small just give me a call!"} />
    
            {/* Contact Form Start */}
            <section className="gap contact-form-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="data">
                                <div className="form-container">
                                    <h2>Contact Us</h2>
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            phone: '',
                                            address: '',
                                            preferredDate: '',
                                            services: [],
                                            message: '',
                                            terms: false
                                        }}
                                        validationSchema={Yup.object({
                                            name: Yup.string().required('Name is required'),
                                            email: Yup.string().email('Invalid email address').required('Email is required'),
                                            phone: Yup.string().required('Phone number is required'),
                                            address: Yup.string().required('Home address is required'),
                                            preferredDate: Yup.date().required('Preferred date of service is required'),
                                            services: Yup.array().min(1, 'At least one service must be selected'),
                                            message: Yup.string().required('Message is required'),
                                            terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                                        })}
                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                            setTimeout(() => {
                                                alert(JSON.stringify(values, null, 2));
                                                setSubmitting(false);
                                                resetForm();
                                            }, 400);
                                        }}
                                    >
                                        {({ values, setFieldValue }) => (
                                            <Form className="formik-form">
                                                <Field name="name" type="text" placeholder="Name" className="form-field" />
                                                <ErrorMessage name="name" component="div" className="error-message" />
    
                                                <Field name="email" type="email" placeholder="Email" className="form-field" />
                                                <ErrorMessage name="email" component="div" className="error-message" />
    
                                                <Field name="phone" type="tel" placeholder="Phone Number" className="form-field" />
                                                <ErrorMessage name="phone" component="div" className="error-message" />
    
                                                <Field name="address" type="text" placeholder="Home Address" className="form-field" />
                                                <ErrorMessage name="address" component="div" className="error-message" />
    
                                                <label htmlFor="preferredDate" className="form-label">Preferred Date of Service</label>
                                                <Field name="preferredDate" type="date" className="form-field" />
                                                <ErrorMessage name="preferredDate" component="div" className="error-message" />
    
                                                <div>Services:</div>
                                                {servicesOffered.map((service, index) => (
                                                    <label key={index}>
                                                        <Field type="checkbox" name="services" value={service} onChange={e => {
                                                            const isChecked = e.target.checked;
                                                            const services = values.services;
                                                            setFieldValue(
                                                                "services",
                                                                isChecked ? [...services, service] : services.filter(s => s !== service)
                                                            );
                                                        }} />
                                                        {service}
                                                    </label>
                                                ))}
                                                <ErrorMessage name="services" component="div" className="error-message" />
    
                                                <Field name="message" as="textarea" placeholder="Message" className="form-field" />
                                                <ErrorMessage name="message" component="div" className="error-message" />
    
                                                <label className="terms-checkbox">
                                                    <Field type="checkbox" name="terms" /> I agree to the Terms and Conditions
                                                </label>
                                                <ErrorMessage name="terms" component="div" className="error-message" />
    
                                                <button type="submit" className="submit-button">Submit</button>
                                            </Form>
                                        )}
                                    </Formik>

   
    </div>
  
    <style jsx>{`
                        .form-container {
                            max-width: 700px;
                            margin: 50px auto;
                            padding: 40px;
                            background: #FFFFFF;
                            border-radius: 12px;
                            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                        }

                        h2 {
                            text-align: center;
                            font-size: 28px;
                            color: #333;
                            margin-bottom: 30px;
                            font-weight: 500;
                        }

                        .formik-form {
                            display: grid;
                            grid-gap: 20px; /* Increased spacing between form elements */
                        }

                        .form-field, .terms-checkbox {
                            border: 2px solid #EAEAEA;
                            border-radius: 8px;
                            padding: 15px;
                            font-size: 16px;
                            margin-bottom: 20px; /* Adjusted margin for spacing */
                            outline: none;
                            transition: border-color 0.3s;
                        }

                        .form-field:focus, .terms-checkbox:focus {
                            border-color: #007AFF;
                        }

                        .form-field textarea {
                            min-height: 150px;
                            resize: vertical;
                        }

                        label {
                            margin-bottom: 5px;
                            color: #666;
                            font-weight: 500;
                        }

                        .error-message {
                            color: #D32F2F;
                            margin-top: 5px;
                            font-size: 14px;
                        }

                        .submit-button {
                            background-color: #007AFF;
                            color: white;
                            border: none;
                            border-radius: 8px;
                            padding: 15px 30px;
                            font-size: 16px;
                            cursor: pointer;
                            transition: background-color 0.2s;
                            text-align: center;
                            display: block;
                            width: 100%;
                        }

                        .submit-button:hover {
                            background-color: #005ECB;
                        }

                        .terms-checkbox label {
                            display: flex;
                            align-items: center;
                        }

                        .terms-checkbox input[type='checkbox'] {
                            margin-right: 10px;
                        }

                        div>Services: {
                            font-weight: 500;
                            margin-bottom: 20px; /* Increased spacing for readability */
                            color: #333;
                        }

                        label {
                            display: block;
                            margin: 10px 0; /* Increased spacing for labels */
                        }
`}</style>



                     
                            
                          
                    
             
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1" >
                <div className="bio">
                    <div className="data">
                        <figure>
                            <img className="author" src="/img/vivi.png" alt="Owner of DJCservices" />
                        </figure>
                        <h3>Dennis Carlisle</h3>
                        <p>Owner of DJCservices</p>
                        <figure>
                            <img src="/img/signature.png" alt="Signature Image" />
                        </figure>
                    </div>
                </div>
                <div className="info">
                    <ul className="contact">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="79" height="94" viewBox="0 0 79 94"> <defs> <clipPath id="clip-location_Bd"> <rect width="79" height="94"/> </clipPath> </defs> <g id="location_Bd" data-name="location B" clipPath="url(#clip-location_B)"> <path id="Path_1gfhjfjytkd" data-name="Path 1" d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z" transform="translate(-922.725 -482.15)"/> <path id="Path_24cr2r" data-name="Path 2d" d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" transform="translate(25 26)"/> </g> </svg>
                            <div>
                                <h3>Located:</h3>
                                <p>Helena, Alabama</p>
                            </div>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62"> <defs> <clipPath id="fsddffsdfsdfsdf"> <rect width="40" height="62"/> </clipPath> </defs> <g id="Mobsfddfsdile" clipPath="url(#fsddffsdfsdfsdf)"> <path id="Pafdth_1dfhgfhgjjdfhgddffgdfgdfgdfgdfgd" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)"/> <path id="Padfth_2" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)"/> </g></svg>
                            <div>
                                <h3>Telephone:</h3>
                                <p>(205) 337-3384</p>
                            </div>
                        </li>
                        <li>
    <a href="mailto:djc.services.llc.al@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="102" height="93" viewBox="0 0 102 93"> <defs> <clipPath id="clip-Emaidl_Bhf"> <rect width="102" height="93"/> </clipPath> </defs> <g id="Emaidfgsdl_B" data-name="Email B" clipPath="url(#clip-Email_Bsdfhf)"> <path id="Pathsdf_1" data-name="Path 1" d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z" transform="translate(-918 -492)"/> <path id="Path_2dfsdsffgs" data-name="Path 2" d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z" transform="translate(-918 -492)"/> </g> </svg>
        <div>
            <h3>Email:</h3>
            <p style={{textDecoration: 'underline'}}>djc.services.llc.al@gmail.com</p>
        </div>
    </a>
</li>



                    </ul>
                    <ul className="social-medias">
                        <li>
                            <a className="fb" href="https://www.facebook.com/profile.php?id=100089812935483" target="_blank">
                                <p>Facebook</p>
                                <i className="fa-brands fa-facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Contact Form 2 End */}

        {/* Contact Faqs Start */}
        <section className="contact-faqs">
            <div className="heading">
                <figure>
                    <img src="/img/re.png" alt="Heading Icon" />
                </figure>
                <span>Frequently asked questions</span>
                <h2>Easy Answers to Your FAQs</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1" >
                    <div className="acc2">
                        <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                            {faqData.items.map((item, key) => (
                            <Accordion.Item key={`contact-item-${key}`} eventKey={`contact-acc-${key}`}>
                                <Accordion.Header>
                                    {item.title}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>{item.text}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Faqs End */}

        {/* Contact Map Start */}
        <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d106722.42668715435!2d-86.884911!3d33.290679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88892098222119fd%3A0x713fbf2966c67788!2sHelena%2C%20AL!5e0!3m2!1sen!2sus!4v1711649700131!5m2!1sen!2sus" width="600" height="760" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* Contact Map End */}
      
    </Layouts>
  );
};
export default Contact;