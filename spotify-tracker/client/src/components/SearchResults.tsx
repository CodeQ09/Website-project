import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Artist } from "../utils/models";
import Loading from "./Loading";

interface SearchResultsProps {
  isLoading: boolean;
  searchResults: Artist[] | undefined;
}

const SearchResults = ({ isLoading, searchResults }: SearchResultsProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        bgcolor: "white",
        borderRadius: 3,
        boxShadow: 3,
        zIndex: 1300,
      }}
    >
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100px"
        >
          <Loading />
        </Box>
      ) : (
        <List>
          {searchResults?.map((artist) => (
            <ListItem key={artist.id} button>
              <ListItemText primary={artist.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchResults;
