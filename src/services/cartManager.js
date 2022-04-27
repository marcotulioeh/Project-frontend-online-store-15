/*
  Formato do item do carrinho:
  [{id: string, quantity: number}, {id: number, quantity: number}]
*/

// Retorna os items do carrinho no formato especificado no comentário acima
export function getFromCartStorage() {
  const storage = localStorage;
  const cart = storage.getItem('cartItems');
  return cart ? JSON.parse(cart) : [];
}

// Salva o id de um item no carrinho e sua quantidade
export function saveToCartStorage(id) {
  const storage = localStorage;
  const currentCart = getFromCartStorage();
  let newCart;
  if (currentCart.some((item) => item.id === id)) {
    newCart = currentCart;
    newCart.find((item) => item.id === id).quantity += 1;
  } else {
    newCart = currentCart;
    newCart.push({ id, quantity: 1 });
  }
  storage.setItem('cartItems', JSON.stringify(newCart));
}

// esvazia o carrinho
export function emptyCartStorage() {
  const storage = localStorage;
  storage.setItem('cartItems', JSON.stringify([]));
}

export function removeItemFromCart(id) {
  const storage = localStorage;
  const currentCart = getFromCartStorage();
  const newCart = currentCart.filter((item) => item.id !== id);
  storage.setItem('cartItems', JSON.stringify(newCart));
}

// aumenta e diminui quantidade de items no carrinho
export function changeItemQuantityInCart(id, operation) {
  const storage = localStorage;
  const currentCart = getFromCartStorage();
  const newCart = currentCart;
  if (operation) { // operation é um valor booleano, se true equivale a aumento de items, se false equivale e diminuição de items
    newCart.find((item) => item.id === id).quantity += 1;
  } else {
    newCart.find((item) => item.id === id).quantity -= 1;
  }
  storage.setItem('cartItems', JSON.stringify(newCart));
  if (newCart.find((item) => item.id === id).quantity <= 0) {
    removeItemFromCart(id);
  }
}
