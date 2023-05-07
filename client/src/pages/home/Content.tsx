import {
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import image from "./assets/Allistair-Method.jpg";

const Content = () => {
  return (
    <Center>
      <Flex my={10} w="60%" justifyContent={"center"} textAlign={"center"}>
        <VStack>
          <Heading fontSize={"5xl"}>Plan for success, once and for all</Heading>
          <Text fontSize={"xl"} h="50px">
            Prioritize, organize, and simplify your tasks with ease.
          </Text>
          <Button
            w="250px"
            bgColor={"pblue.900"}
            color="sgray.100"
            fontWeight={"bold"}
            h='50px'
          >
            Learn More
          </Button>
          <Box height="100px" />
          <Image
            src={image}
            opacity={"70%"}
            boxSize={"400px"}
            borderRadius={"30px"}
            boxShadow={" 0px 0px 250px 35px"}
          />
        </VStack>
      </Flex>
    </Center>
  );
};

export default Content;
