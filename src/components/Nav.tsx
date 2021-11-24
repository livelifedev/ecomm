import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemType } from '../types';

const Nav = () => {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([] as ItemType[]);

  function getCartItems() {
    const cart = localStorage.getItem('cart');

    if (cart) {
      setItems(JSON.parse(cart));
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <Link to="/" className="text-lg font-bold py-4">
          Home
        </Link>
        <button
          className="text-lg font-bold underline py-4"
          onClick={() => {
            getCartItems();
            setShowCart(!showCart);
          }}
        >
          View Cart
        </button>
      </div>

      {showCart && (
        <div className="z-10 absolute right-0 border-solid border-2 border-black w-96 h-96 bg-white p-4">
          <h3 className="font-bold text-center uppercase">Shopping Cart</h3>
          <ul>
            {items.map((item, i) => (
              <li key={`${item.id}${i}`} className="my-2">
                {item.title}
              </li>
            ))}
          </ul>

          <Link
            to="/checkout"
            className="text-lg font-bold py-4 absolute bottom-0 right-6"
          >
            Checkout
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
