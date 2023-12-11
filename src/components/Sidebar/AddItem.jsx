import { useRef, useState } from "react";
import Button from "../Button";
import { useItemStore } from "../../store/itemStore";
const AddItem = () => {
  const addNewItem = useItemStore((state) => state.addNewItem);
  const [newItem, setnewItem] = useState("");
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //validation:
        if (!newItem) {
          alert("Item cannot be empty");
          inputRef.current.focus();
          return;
        }

        addNewItem(newItem);
        setnewItem("");
      }}
    >
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        autoFocus
        type="text"
        placeholder="Task missing ..."
        value={newItem}
        onChange={(e) => {
          setnewItem(e.target.value);
        }}
      />
      <Button>Add New Task</Button>
    </form>
  );
};

export default AddItem;
