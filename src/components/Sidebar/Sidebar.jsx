import AddItem from "./AddItem";
import ButtonGroup from "./ButtonGroup";
const Sidebar = ({
  addNewItem,
  removeAllTasks,
  resetInitial,
  markAllAsComplete,
  markAllInComplete,
}) => {
  return (
    <div className="sidebar">
      <AddItem onAddItem={addNewItem}></AddItem>
      <ButtonGroup
        removeAllTasks={removeAllTasks}
        resetInitial={resetInitial}
        markAllAsComplete={markAllAsComplete}
        markAllInComplete={markAllInComplete}
      ></ButtonGroup>
    </div>
  );
};

export default Sidebar;
