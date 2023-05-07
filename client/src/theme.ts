import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#ACCAF2",
      500: "#607EA5",
      900: "#1F4472",
    },
    secondary: {
      100: "#97A387",
      500: "#7E8C69",
      900: "#586249",
    },
    error: {
      100: "#C05E56",
      500: "#B1362C",
      900: "#7B251E",
    },
    warning: {
      100: "#E4CD5B",
      500: "#DEC133",
      900: "#C5AD3A",
    },
    success: {
      100: "#4CAF50",
      500: "#2E7D32",
      900: "#1B5E20",
    },
  },
});
