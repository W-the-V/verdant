import * as Clicks from "../../Tools/Clicks";
import "./Cart.css";

function Cart({ showCart, setShowCart }) {
  return (
    <>
      <div className="cart__opacity hidden"></div>
      <div className="cart__outer__shell closed">
        <div className="cart__inner__shell">
          <div
            className="cart__show_button"
            onClick={() => Clicks.cartClick(showCart, setShowCart)}
          >
            <i className="fas fa-angle-right flipped"></i>
          </div>
          <div className="cart__inner__right">
            <div className="cart__header">Current Cart</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
