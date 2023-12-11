import AddItem from "./AddItem";
import ButtonGroup from "./ButtonGroup";
const Sidebar = () => {
  console.log("side bar rendering");
  return (
    <div className="sidebar">
      <AddItem></AddItem>
      <ButtonGroup></ButtonGroup>
    </div>
  );
};

export default Sidebar;
