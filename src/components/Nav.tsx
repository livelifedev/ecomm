const Nav = () => {
  return (
    <>
      <div className="flex justify-between">
        <a className="text-lg font-bold py-4">Home</a>
        <button className="text-lg font-bold underline py-4">View Cart</button>
      </div>

      <div className="z-10 absolute right-0 border-solid border-2 border-black w-96 h-96 bg-white p-4">
        <h3 className="font-bold text-center uppercase">Shopping Cart</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
