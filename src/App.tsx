import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import ChuckJokes from "./components/ChuckJokes";
import NavBar from "./components/navBar/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <NavBar />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="90vh" alignContent={"center"}>
          <Routes>
            <Route path="/" element={<ClickCounter />} />
            <Route path="/chuck" element={<ChuckJokes />} />
          </Routes>
        </Grid>
      </Box>
    </Router>
  </ChakraProvider>
);
