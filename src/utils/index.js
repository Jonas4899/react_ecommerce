/**
 * This function calculates the total price of all products in cart
 * @param {Array} products cartProducts: Array of objects
 * @returns {Int} Total price of all products in cart
 */
export const totalPrice = (products) => {
  let total = products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return total.toLocaleString("es", { style: "currency", currency: "USD" });
};
