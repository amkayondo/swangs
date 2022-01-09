import { Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiSpotifyFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

const FeedShowCase = () => {
  const links = [
    {
      name: "spotify",
      path: "https://open.spotify.com/track/40XR1KBOyfjIjbD75OSF11?si=159af4559c4c4b2d",
      icon: (
        <RiSpotifyFill
          size={50}
          color="#fff"
          style={{
            marginRight: "10px",
          }}
        />
      ),
    },
    {
      name: "youtube",
      path: "https://www.youtube.com/watch?v=LdVNuDTix00",
      icon: (
        <RiYoutubeFill
          size={50}
          color="#fff"
          style={{
            marginRight: "10px",
          }}
        />
      ),
    },
    {
      name: "twitter",
      path: "https://twitter.com/AzawiOfficial",
      icon: (
        <RiTwitterFill
          size={50}
          color="#fff"
          style={{
            marginRight: "10px",
          }}
        />
      ),
    },
  ];
  return (
    <Container
      maxW={["full", "container.xl"]}
      backgroundColor={"gray.100"}
      height={["300", "600"]}
      borderRadius={12}
      backgroundImage={`url("/images/azawi/party_01.jfif")`}
      backgroundSize="cover"
      backgroundPosition="center"
      paddingTop={4}
      paddingBottom={4}
    >
      <Container
        maxW={["full", "container.xl"]}
        backgroundColor={"rgba(0, 0, 0, 0.19)"}
        height={["250", "570"]}
        pt={"30%"}
        borderRadius={12}
      >
        <Heading color={"white"} display={["block", "none"]} as="h2" size="2xl">
          Party Mood
        </Heading>
        <Heading display={["none", "block"]} color={"white"} as="h1" size="4xl">
          Party Mood
        </Heading>
        <Heading
          color={"white"}
          fontWeight={"light"}
          mt={11}
          as="h3"
          size="lg"
          display={["block", "none"]}
        >
          Azawi
        </Heading>
        <Heading
          color={"white"}
          fontWeight={"light"}
          as="h2"
          mt={11}
          size="2xl"
          display={["none", "block"]}
        >
          Azawi
        </Heading>
        <Flex mt={22}>
          {links.map((link, index) => (
            <div key={index}>
              <a href={link.path} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </div>
          ))}
        </Flex>
      </Container>
    </Container>
  );
};

export default FeedShowCase;
