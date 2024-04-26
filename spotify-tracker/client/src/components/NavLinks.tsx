import { List, ListItem, ListItemText, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
  active?: boolean;
  isMediumScreenDown?: boolean;
}

const navigation = [
  { name: "Home", to: "/" },
  { name: "Artists", to: "/artists" },
  { name: "Daily Artist", to: "/daily-artist" },
];

const NavbarLink = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "active",
})<NavbarLinkProps>(({ active }) => ({
  "& span": {
    color: active ? "#1DB954" : "#fff",
    display: "block",
    position: "relative",
    textOverflow: "ellipsis",
    transition: "color 0.5s",
    whiteSpace: "nowrap",
  },
  "& span::after": {
    background: "#1DB954",
    borderRadius: 5,
    bottom: -5,
    content: '""',
    height: 3,
    left: 0,
    position: "absolute",
    transform: active ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.5s",
    width: "100%",
  },
  "&:hover span": {
    color: "#1DB954",
  },
  "&:hover span::after": {
    transform: "scaleX(1)",
  },
}));

export const DrawerEl = () => {
  const location = useLocation();

  return (
    <List sx={{ bgcolor: "#1f1f1f", width: 250 }}>
      {navigation.map((item) => (
        <ListItem
          component={Link}
          key={item.name}
          to={item.to}
          sx={{
            "&:hover": {
              backgroundColor: "#1DB954",
              "& .MuiListItemText-primary": {
                color: "#000",
              },
            },
          }}
          selected={item.to === location.pathname}
        >
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{ style: { color: "#fff" } }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export const NavLinks = ({ isMediumScreenDown }: NavbarLinkProps) => {
  const location = useLocation();

  return (
    <List sx={{ display: isMediumScreenDown ? "none" : "flex" }}>
      {navigation.map((item) => (
        <ListItem
          component={Link}
          key={item.name}
          to={item.to}
          sx={{
            paddingX: 3,
            "&.Mui-selected": {
              backgroundColor: "transparent",
            },
          }}
          selected={item.to === location.pathname}
        >
          <NavbarLink
            active={item.to === location.pathname}
            primary={item.name}
          />
        </ListItem>
      ))}
    </List>
  );
};
