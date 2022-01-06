import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <Container maxW="container.xl" mt={10}>
      <Container maxW="container.md">
        <Alert borderRadius={4} status="info" backgroundColor={"gray.200"}>
          <AlertIcon color={"black"} />
          This is demo form. I dont save any data.{" "}
          <Link
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            href="https://twitter.com/kayondoedward"
            target={"_blank"}
          >
            &nbsp; @kayondoedward
          </Link>
        </Alert>
      </Container>
      {isSubmitted === true && (
        <Container maxW="container.md" mt={3}>
          <Alert borderRadius={4} status="success">
            <AlertIcon color={"black"} />
            Message sent successfully, we will get back to you soon! 🎉
          </Alert>
        </Container>
      )}
      <form onSubmit={onSubmit}>
        <Container maxW="container.md">
          <Flex mt={2} justifyContent={"space-between"}>
            <Box width={"50%"} padding={3}>
              <FormControl isRequired>
                <FormLabel htmlFor="fullname">Full name</FormLabel>
                <Input
                  id="fullname"
                  type={"text"}
                  name="fullname"
                  placeholder="Full name"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type={"email"}
                  name="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel htmlFor="PhoneNumber">Phone Number</FormLabel>
                <Input
                  id="PhoneNumber"
                  type={"tel"}
                  name="PhoneNumber"
                  placeholder="Phone Number"
                />
              </FormControl>
            </Box>
            <Box width={"50%"} height={220} padding={3}>
              <FormControl isRequired>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  height={220}
                  name="message"
                  placeholder="Add your message here "
                  size="sm"
                />
              </FormControl>
            </Box>
          </Flex>
          <Box mt={1} width={"100%"} padding={3}>
            <Button width={"100%"} type="submit">
              Send
            </Button>
          </Box>
        </Container>
      </form>
    </Container>
  );
};

export default ContactForm;
