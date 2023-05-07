import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
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
        <Text as="b" fontSize={"3xl"} color="sgray.100">
          {" "}
          Alistair | To Do
        </Text>
      </HStack>
      <Spacer />
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
    </Flex>
  );
};

export default NavBar;
