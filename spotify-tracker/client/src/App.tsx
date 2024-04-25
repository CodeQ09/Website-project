import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CircularProgress, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { SnackbarProvider } from "./context/SnackBarContext";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import ArtistListPage from "./pages/ArtistListPage";
import DailyArtistPage from "./pages/DailyArtistPage";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <SnackbarProvider>
          <Navbar />
          <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artists" element={<ArtistListPage />} />
              <Route path="/daily-artist" element={<DailyArtistPage />} />
              <Route
                path="*"
                element={
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="80vh"
                  >
                    <CircularProgress />
                  </Box>
                }
              />
            </Routes>
          </Container>
        </SnackbarProvider>
      </Router>
    </UserProvider>
  );
};

export default App;
