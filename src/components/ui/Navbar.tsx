import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton } from "@mui/material";
export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
