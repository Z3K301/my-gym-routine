import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChuckJokes from "./components/ChuckJokes";
import NavBar from "./components/navBar/NavBar";
import PrivateRoute from "./router/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import { UnloggedUser } from "./router/UnloggedUser";
import HomeScreen from "./components/HomeScreen";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <NavBar />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="90vh" alignContent={"center"}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {/* Unlogged User Routes */}
            <Route path="/" element={<UnloggedUser />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Route>
            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/chuck" element={<ChuckJokes />} />
            </Route>
          </Routes>
        </Grid>
      </Box>
    </Router>
  </ChakraProvider>
);
