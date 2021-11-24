import { ItemType } from '../types';

const Item = (props: ItemType) => {
  return (
    <div className="item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Item;
