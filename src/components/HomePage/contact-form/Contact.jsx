import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import ContactIng from '../../../assets/contact_form.jpeg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Send email to admin (admin_notification_template)
    emailjs
      .send(
        "service_mp0e1192", // Your EmailJS service ID
        "template_p77cp8b",  // Admin notification template
        formData,            // Form data to be sent (name, email, message)
        "yozpNwsbycgL75hCS"  // Your EmailJS user ID
      )
      .then(
        () => {
          // Send email to user (user_notification_template)
          // Using the form data, the user's email will be dynamically included here
          emailjs
            .send(
              "service_mp0e1192", // Your EmailJS service ID
              "template_ai8fo9j", // User confirmation template
              {
                ...formData, // Send the form data to the user email template
                to_email: formData.email, // Make sure you send the email to the user's email address
              },
              "yozpNwsbycgL75hCS" // Your EmailJS user ID
            )
            .then(() => {
              setIsSubmitting(false);
              toast.success("Thank you for contacting us! We will get back to you soon.");
              setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
              setIsSubmitting(false);
              toast.error("There was an error sending the email to the user.");
            });
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("There was an error sending the email to the admin.");
        }
      );
  };

  return (
    <Section>
      <Heading>Contact Us</Heading>
      <Container>
        {/* Left Image Section */}
        <ImageWrapper>
          <img src={ContactIng} alt="Contact" />
        </ImageWrapper>

        {/* Right Form Section */}
        <FormWrapper>
          <h1>Let's Stay in Touch</h1>
          <h3>If you have any queries</h3>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </SubmitButton>
          </Form>

        </FormWrapper>
      </Container>
    </Section>
  );
};

export default Contact;

// Styled Components

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  margin: 30px 0px;
  flex-direction: column;
  gap: 30px;
`;

const Heading = styled.h1`
  font-size: 35px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #ecffdc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-wrap: wrap;
  padding: 10px 40px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 5px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffff;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffff;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #03c03c;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #03c08c;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
