export const entryClick = (history) => {
  return history.push("/home");
};
export const navMenuClick = (e, setAnchorEl) => {
  setAnchorEl(e.currentTarget);
};
export const cartClick = (showCart, setShowCart) => {
  if (showCart) {
    document.querySelector(".cart__opacity").classList.add("hidden");
    document.querySelector(".cart__outer__shell").classList.add("closed");
    document.querySelector(".fa-angle-right").classList.add("flipped");
    setShowCart(false);
  } else {
    document.querySelector(".cart__opacity").classList.remove("hidden");
    document.querySelector(".cart__outer__shell").classList.remove("closed");
    document.querySelector(".fa-angle-right").classList.remove("flipped");
    setShowCart(true);
  }
};
