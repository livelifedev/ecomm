export function getCartItems(): [] {
  const cart = localStorage.getItem('cart');

  if (cart) {
    return JSON.parse(cart);
  }

  return [];
}

export function clearCart(): void {
  localStorage.setItem('cart', JSON.stringify([]));
}
