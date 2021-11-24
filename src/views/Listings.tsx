import { useState, useEffect } from 'react';
import { ItemType } from '../types';
import Item from '../components/Item';

const Listings = () => {
  const [items, setItems] = useState([] as ItemType[]);

  useEffect(() => {
    async function requestPets() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = (await res.json()) as ItemType[];

      setItems(data);
    }

    requestPets();
  }, []);

  return (
    <div className="listings">
      <h1 className="font-bold text-4xl text-center my-16">Listings</h1>

      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default Listings;
