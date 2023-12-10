import { useContext, useMemo } from "react";
import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";
import { itemContext } from "../context/ItemsContextProvider";
const options = [
  { value: "default", label: "Default tasks" },
  { value: "packed", label: "Packed tasks" },
  { value: "upacked", label: "Unpacked tasks" },
];
const ItemList = () => {
  const { item, remeoveElement, toggleIteme } = useContext(itemContext);
  const [sorted, setSorted] = useState("default");
  const sortedItems = useMemo(() => {
    return [...item].sort((a, b) => {
      if (sorted === "packed") {
        return b.packed - a.packed;
      }
      if (sorted === "unpacked") {
        return a.packed - b.packed;
      }
      return 0;
    });
  }, [item, sorted]);

  return (
    <ul>
      {item.length === 0 && <EmptyView></EmptyView>}
      {item.length > 0 && (
        <section className="sorting">
          {" "}
          <Select
            onChange={(option) => setSorted(option.value)}
            defaultValue={options[0]}
            options={options}
          ></Select>
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Element
            key={item.id}
            item={item}
            remeoveElement={remeoveElement}
            toggleIteme={toggleIteme}
          ></Element>
        );
      })}
    </ul>
  );
};

const Element = ({ item, remeoveElement, toggleIteme }) => {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => toggleIteme(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          remeoveElement(item.id);
        }}
      >
        😎
      </button>
    </li>
  );
};

export default ItemList;
