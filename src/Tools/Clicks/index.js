export const entryClick = (history) => {
  return history.push("/home");
};
export const navMenuClick = (e, setAnchorEl) => {
  setAnchorEl(e.currentTarget);
};
