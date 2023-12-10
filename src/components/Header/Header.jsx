import { useContext } from "react";
import Counter from "./Counter";
import Logo from "./Logo";
import { itemContext } from "../../context/ItemsContextProvider";
const Header = () => {
  const { item } = useContext(itemContext);
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
