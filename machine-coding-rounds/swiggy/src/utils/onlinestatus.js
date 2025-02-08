export const checkOnlineState = () => {
  window.addEventListener("online", () => {
    return true;
  });
  window.addEventListener("offline", () => {
    return false;
  });
};
