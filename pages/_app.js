import React, { useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import LayOut from "../src/infrastructure/components/LayOut";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import SplashScreen from "../src/features/splashScreen";
import "@fontsource/montserrat";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  fonts: {
    heading: "montserrat",
    body: "montserrat",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <ChakraProvider theme={theme}>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ChakraProvider>
  );
}

export default MyApp;
