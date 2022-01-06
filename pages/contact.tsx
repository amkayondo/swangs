import { Container } from "@chakra-ui/react";
import React from "react";
import ContactDetails from "../src/features/contact/ContactDetails";
import ContactForm from "../src/features/contact/ContactForm";

const Contact = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <ContactDetails />
      <ContactForm />
    </Container>
  );
};

export default Contact;
