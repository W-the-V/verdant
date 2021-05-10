import Button from "@material-ui/core/Button";
import * as Clicks from "../../Tools/Clicks";
import NavMenu from "../NavMenu";
import "./NavBar.css";

function NavBar({ history }) {
  return (
    <>
      <div className="nav_bar__outer__shell">
        <div className="nav__logo" onClick={() => Clicks.entryClick(history)}>
          Verdant
        </div>
        <div className="nav_bar__right_menu">
          <Button aria-controls="simple-menu" aria-haspopup="true">
            Categories
          </Button>
          <Button aria-controls="simple-menu" aria-haspopup="true">
            Cart
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => history.push("/checkout")}
          >
            Checkout
          </Button>
          <NavMenu />
        </div>
      </div>
      <div className="nav_bar__spacer"></div>
    </>
  );
}

export default NavBar;
