import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ChuckJokes from "./components/ChuckJokes";
import NavBar from "./components/navBar/NavBar";
import PrivateRoute from "./router/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import { UnloggedUser } from "./router/UnloggedUser";
import HomeScreen from "./components/HomeScreen";
import RoutineBreakdown from "./components/routineRepeater/RoutineBreakdown";
import MyCalendar from "./components/MyCalendar";
import Landing from "./components/Landing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <NavBar />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="90vh" alignContent={"center"}>
          <Routes>
            <Route path="/chuck" element={<ChuckJokes />} />
            <Route path="/" element={<Navigate to="/home" />} />
            {/* Unlogged User Routes */}
            <Route path="/" element={<UnloggedUser />}>
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Route>
            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/home" element={<HomeScreen isPublic={false} />} />
              <Route path="/popworkout" element={<HomeScreen isPublic />} />
              <Route path="/routine/:id" element={<RoutineBreakdown />} />
              <Route path="/calendar" element={<MyCalendar />} />
            </Route>
          </Routes>
        </Grid>
      </Box>
    </Router>
  </ChakraProvider>
);
