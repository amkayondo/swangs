import React from "react";
import { Container } from "@chakra-ui/react";
import TopNavigation from "../Navigations/TopNavigation";
import FooterNavigation from "../Navigations/FooterNavigation";

const LayOut = (prop: { children: React.ReactNode }) => {
  return (
    <>
      <TopNavigation />
      <div
        style={{
          marginTop: 17,
        }}
      >
        {prop.children}
      </div>
      <FooterNavigation />
    </>
  );
};

export default LayOut;
