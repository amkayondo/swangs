import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import OurEventServices from "../src/features/events/OurEventServices";
import TopEventShowCase from "../src/features/events/TopEventShowCase";

const Events = () => {
  return (
    <>
      <TopEventShowCase />
      <OurEventServices />
      <Box mt={10} mb={"50px"}>
        <Flex justifyContent={"center"} height={"100%"} alignItems={"center"}>
          <Link href={"/contact"}>
            <Button title="GET IN TOUCH" borderRadius="50" fontSize={17} padding={5}>
              GET IN TOUCH
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Events;
