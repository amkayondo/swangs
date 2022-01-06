import { Container } from "@chakra-ui/react";
import React from "react";
import AudioDetails from "../src/features/audio/AudioDetails";
import AudioTopShowCase from "../src/features/audio/AudioTopShowCase";
import OurAudioServices from "../src/features/audio/OurAudioServices";

const Audio = () => {
  return (
    <Container maxW="container.xl">
      <AudioTopShowCase />
      <AudioDetails />
      <OurAudioServices/>
    </Container>
  );
};

export default Audio;
