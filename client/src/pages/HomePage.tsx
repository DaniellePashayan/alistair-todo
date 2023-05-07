import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Content from "../components/Content";

const HomePage = () => {
  return (
    <Grid templateRows="1fr, 9fr">
      <GridItem rowSpan={1}>
        <NavBar />
      </GridItem>
      <GridItem rowSpan={2}>
        <Content />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
