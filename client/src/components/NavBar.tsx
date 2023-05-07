import {
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
} from "@chakra-ui/react";
import Logo from "../assets/Icon.png";

const NavBar = () => {
  return (
    <Flex
      minWidth={"max-content"}
      alignItems={"center"}
      gap="2"
      bg="pblue.900"
      h={{ base: "40px" }}
    >
      {/* Left Side Navbar */}
      <HStack>
        <Image boxSize={{ base: "0px" }} src={Logo} />
        <Link as="b" fontSize={{ sm: "20px" }} color="sgray.100">
          {" "}
          Alistair | To Do
        </Link>
      </HStack>
      <Spacer />
      {/* Right side Navbar */}
      <Show below="md">
        <Flex mr={6} alignContent={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0,0,256,256"
            fill="#e6e6e6"
          >
            <g
              fill="#e6e6e6"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M3,5c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,11c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,17c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
              </g>
            </g>
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
