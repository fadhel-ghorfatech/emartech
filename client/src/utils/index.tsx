export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user && user !==  "undefined"  ? JSON.parse(user) : null;
};
