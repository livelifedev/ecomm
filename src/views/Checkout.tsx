import { useState } from 'react';
import { ItemType } from '../types';
import { getCartItems, clearCart } from '../utils';

const Checkout = () => {
  const [showComplete, setShowComplete] = useState(false);
  const items = getCartItems() as ItemType[];

  function calculateTotal(cart: ItemType[]): number {
    return cart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  }

  return (
    <div className="checkout">
      <h1 className="font-bold text-4xl text-center my-16">Checkout</h1>
      {!showComplete && (
        <>
          <table className="table-auto mx-auto">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={`${item.id}${i}`}>
                  <td className="border px-4 py-2 font-medium">{item.title}</td>
                  <td className="border px-4 py-2 font-medium">
                    ${item.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="font-bold">Total</td>
                <td className="font-bold">
                  ${calculateTotal(items).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="text-center my-16">
            <button
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded"
              onClick={() => {
                clearCart();
                setShowComplete(true);
              }}
            >
              Continue
            </button>
          </div>
        </>
      )}

      {showComplete && (
        <div className="text-center">
          <p>Transaction successful!</p>
          <p>Thank you for your purchase.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
