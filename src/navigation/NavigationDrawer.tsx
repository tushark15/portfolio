import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Drawer
} from "@mui/material";
import React, { useState } from "react";

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const list = () => {
    return <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>;
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>OPEN</Button>
      <Drawer open={isOpen} onClose={toggleDrawer}>
        {list()}
        </Drawer>
    </div>
  );
};

export default NavigationDrawer;
