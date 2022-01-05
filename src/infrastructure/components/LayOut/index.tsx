import React from "react";
import { Container } from "@chakra-ui/react";
import TopNavigation from "../Navigations/TopNavigation";
import FooterNavigation from "../Navigations/FooterNavigation";

const LayOut = (prop: { children: React.ReactNode }) => {
  return (
    <Container maxW="container.xl">
      <TopNavigation />
      <div
        style={{
          marginTop: 17,
        }}
      >
        {prop.children}
      </div>
      <FooterNavigation />
    </Container>
  );
};

export default LayOut;
