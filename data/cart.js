export const cart = [];

export function addToCart(productId) {
  let matchItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchItem = cartItem;
    }
  });

  if (matchItem) {
    matchItem.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }
}
