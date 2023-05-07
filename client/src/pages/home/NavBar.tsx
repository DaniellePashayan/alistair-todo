import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      minWidth={"max-content"}
      alignItems={"center"}
      gap="2"
      bg="primaryblue.900"
      h="100px"
    >
      <Box
        width="250px"
        fontSize={"3xl"}
        color="secondarygray.100"
        ml="20px"
        fontStyle={"bold"}
      >
        Alistair | To Do
      </Box>
      <Spacer />
      <Grid
        templateColumns={"repeat(3,1fr)"}
        alignItems={"center"}
        fontSize={"xl"}
        gap={6}
      >
        <GridItem>
          <Link href="/About" width={"100px"} color="secondarygray.100">
            About
          </Link>
        </GridItem>
        <Link href="/Features" width={"100px"} color="secondarygray.100">
          Features
        </Link>
        <Button fontSize={"xl"} bg="primaryblue.500" color="secondarygray.100">
          Log In
        </Button>
      </Grid>
    </Flex>
  );
};

export default NavBar;
