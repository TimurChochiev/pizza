export const fillCartFromLS = () => {
  const pizzasJSON = localStorage.getItem("cart");
  return pizzasJSON ? JSON.parse(pizzasJSON) : [];
};
