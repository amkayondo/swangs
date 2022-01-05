import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import LayOut from "../src/infrastructure/components/LayOut";
import '@fontsource/montserrat'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  fonts: {
    heading: 'montserrat',
    body: 'montserrat',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
     
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ChakraProvider>
  );
}

export default MyApp;
