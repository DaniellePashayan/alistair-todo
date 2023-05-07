import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <Grid templateRows="1fr, 9fr">
      <GridItem rowSpan={1}>
        <NavBar />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
