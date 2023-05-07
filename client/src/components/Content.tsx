import {
  Center,
  Flex,
  Heading,
  VStack,
  Image,
  Box,
  Button,
  Container,
} from "@chakra-ui/react";
import image from "../assets/Allistair-Method.jpg";

const Content = () => {
  return (
    <Center>
      <Flex my={10} w="60%" justifyContent={"center"} textAlign={"center"}>
        <VStack>
          <Heading fontSize={{ base: '28px' }}>
            Plan for success, once and for all
          </Heading>
          <Box pb="20px">
            <Container fontSize={{base:'17px'}} h="50px">
              Prioritize, organize, and simplify your tasks with ease.
            </Container>
          </Box>
          <Button
            w="250px"
            bgColor={"pblue.900"}
            color="sgray.100"
            fontWeight={"bold"}
          >
            Learn More
          </Button>
          <Box height="100px" />
          <Image
            src={image}
            opacity={"70%"}
            boxSize={{base: '250px'}}
            borderRadius={"30px"}
            boxShadow={" 0px 0px 250px 35px"}
          />
        </VStack>
      </Flex>
    </Center>
  );
};

export default Content;
