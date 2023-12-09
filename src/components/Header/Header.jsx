import Counter from "./Counter";
import Logo from "./Logo";
const Header = ({ packedNumber, totalItem }) => {
  return (
    <header>
      <Logo></Logo>
      <Counter packedNumber={packedNumber} totalItem={totalItem}></Counter>
    </header>
  );
};

export default Header;
