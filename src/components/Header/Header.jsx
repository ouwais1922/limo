import Counter from "./Counter";
import Logo from "./Logo";
import { useItemStore } from "../../store/itemStore";
const Header = () => {
  const item = useItemStore((state) => state.item);
  return (
    <header>
      <Logo></Logo>
      <Counter
        totalItem={item.length}
        packedNumber={item.filter((e) => e.packed).length}
      ></Counter>
    </header>
  );
};

export default Header;
