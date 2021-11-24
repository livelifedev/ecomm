import { ItemType } from '../types';

const Item = (props: ItemType) => {
  return (
    <div className="flex my-16">
      <div className="w-60 relative">
        <img src={props.image} />
        <div className="absolute bottom-0 bg-red-600 px-4 py-2">
          <h4 className="text-white font-bold">${props.price.toFixed(2)}</h4>
        </div>
      </div>
      <div className="flex-1 px-16 flex flex-col justify-center">
        <h3 className="font-bold text-lg mb-2">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Item;
