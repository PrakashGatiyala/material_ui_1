import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import CustomListItem from "./CustomListItem";
function Sidebar({ mode, setMode }) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <CustomListItem
            href="#home"
            listItemIcon={<Home />}
            primary="Homepage"
          />
          <CustomListItem
            href="#simple-list"
            listItemIcon={<Article />}
            primary="Pages"
          />
          <CustomListItem
            href="#simple-list"
            listItemIcon={<Group />}
            primary="Groups"
          />
          <CustomListItem
            href="#simple-list"
            listItemIcon={<Storefront />}
            primary="Marketplace"
          />
          <CustomListItem
            href="#simple-list"
            listItemIcon={<Person />}
            primary="Friends"
          />
          <CustomListItem
            href="#simple-list"
            listItemIcon={<Settings />}
            primary="Settings"
          />
          <CustomListItem
            href="#simple-list"
            listItemIcon={<AccountBox />}
            primary="Profile"
          />

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
