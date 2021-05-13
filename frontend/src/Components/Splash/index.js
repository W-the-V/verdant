import * as Clicks from "../../Tools/Clicks";
import src from "../../images/verdantlogo.png";
import "./Splash.css";

function Splash({ history }) {
  return (
    <div className="splash__outer__shell">
      <div className="splash__left">
        <div className="splash__left__inner">
          <img className="splash__logo" src={src}></img>
          <p className="splash__header">Turn over a new leaf with Verdant:</p>
          <p className="splash__sub_header">Your new one stop Plant shop.</p>
          <p className="splash__subtext__header">*DISCLAIMER*</p>
          <p className="splash__subtext">
            **This is a Mock website, purchases are not made using real money
            and no items are actually being offered or sold**
          </p>
        </div>
      </div>
      <div className="splash__right">
        <div className="splash__right__inner">
          <i
            className="fas fa-arrow-right"
            onClick={() => Clicks.entryClick(history)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Splash;
