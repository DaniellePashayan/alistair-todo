import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Hide,
  Image,
  Link,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/Icon.png";

const NavBar = () => {
  return (
    <Flex
      minWidth={"max-content"}
      alignItems={"center"}
      gap="2"
      bg="pblue.900"
      h="100px"
    >
      <HStack>
        <Image boxSize={"75px"} src={Logo} />
        <Link as="b" fontSize={"3xl"} color="sgray.100">
          {" "}
          Alistair | To Do
        </Link>
      </HStack>
      <Spacer />
      <Show below="md">
        <Flex mr={6} alignContent={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="gray.900"
          >
            <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
          </svg>
        </Flex>
      </Show>
      <Hide below="md">
        <Grid
          templateColumns={"repeat(3,1fr)"}
          alignItems={"center"}
          fontSize={"xl"}
          gap={6}
          mr={6}
        >
          <GridItem>
            <Link href="/About" width={"100px"} color="sgray.100">
              About
            </Link>
          </GridItem>
          <Link href="/Features" width={"100px"} color="sgray.100">
            Features
          </Link>
          <Button fontSize={"xl"} bg="pblue.500" color="sgray.100">
            Log In
          </Button>
        </Grid>
      </Hide>
    </Flex>
  );
};

export default NavBar;
