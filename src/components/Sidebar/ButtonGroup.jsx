import Button from "../Button";
import { useItemStore } from "../../store/itemStore";

const ButtonGroup = () => {
  const { markAllAsComplete } = useItemStore();
  const { markAllInComplete } = useItemStore();
  const { removeAllTasks } = useItemStore();
  const { resetInitial } = useItemStore();

  const secondaryButtons = [
    { text: "Mark All Done", function: markAllAsComplete },
    { text: "Mark All !Done", function: markAllInComplete },
    { text: "Reset To Initial", function: resetInitial },
    { text: "Remove All Tasks", function: removeAllTasks },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((t) => (
        <Button key={t.text + t.function.toString()} onClick={t.function}>
          {t.text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
