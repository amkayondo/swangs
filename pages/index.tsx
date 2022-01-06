import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import BriefDescription from "../src/features/home/BriefDescription";
import FeedShowCase from "../src/features/home/FeedShowCase";
import CompanyServices from "../src/features/home/CompanyServices";
import OurPartners from "../src/features/home/OurPartners";

const Home = () => {
  return (
    <Container maxW="container.xl">
      <FeedShowCase />
      <BriefDescription />
      <CompanyServices />
      <OurPartners />
    </Container>
  );
};

export default Home;
