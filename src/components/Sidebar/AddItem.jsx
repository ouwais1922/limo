import { useRef, useState } from "react";
import Button from "../Button";
const AddItem = ({ onAddItem }) => {
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

        onAddItem(newItem);
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
