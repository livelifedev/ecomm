export function getCartItems(): [] {
  const cart = localStorage.getItem('cart');

  if (cart) {
    return JSON.parse(cart);
  }

  return [];
}
