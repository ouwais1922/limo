const Counter = ({ totalItem, packedNumber }) => {
  return (
    <p>
      <b>{packedNumber}</b> / {totalItem} items packed
    </p>
  );
};

export default Counter;
