import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Hide,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../assets/Icon.png";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Flex
      minWidth={"max-content"}
      alignItems={"center"}
      gap="2"
      bg="pblue.900"
      h={{ base: "60px" }}
      boxShadow={"0px 0px 5px 0px"}
    >
      {/* Left Side Navbar */}
      <HStack>
        <Image boxSize={{ base: "0px" }} src={Logo} />
        <Container w="100%" ml={{ base: "10px" }} pl={{ base: "10px" }}>
          <Link as="b" fontSize={{ base: "20px" }} color="sgray.100">
            {" "}
            Alistair | To Do
          </Link>
        </Container>
      </HStack>
      <Spacer />
      {/* Right side Navbar */}
      <Show below="md">
        <Flex mr={6} alignContent={"center"}>
          <Menu isLazy>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} />
            <MenuList>
              <MenuGroup title="Sites">
                <MenuItem as="a" href="/About">
                  About
                </MenuItem>
                <MenuItem as="a" href="/Features">
                  Features
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Account">
                <MenuItem>
                  <Link href="/Login">Log In</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/SignUp">Sign Up</Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
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
