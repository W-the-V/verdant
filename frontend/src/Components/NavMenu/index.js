import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as Clicks from "../../Tools/Clicks";
import "./NavMenu.css";

function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav_menu__shell">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => Clicks.navMenuClick(e, setAnchorEl)}
      >
        About
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a
            className="about__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/W-the-V/verdant"
          >
            Repo
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            className="about__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/W-the-V"
          >
            GitHub
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            className="about__link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/walter-hills-a52535205/"
          >
            LinkedIn
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            className="about__link"
            target="_blank"
            rel="noreferrer"
            href="https://walterhills.dev"
          >
            Portfolio
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default NavMenu;
