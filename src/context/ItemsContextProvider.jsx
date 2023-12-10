import { useState, createContext, useEffect } from "react";
export const itemContext = createContext();
const ItemsContextProvider = ({ children }) => {
  const [item, setItem] = useState(() => {
    return JSON.parse(localStorage.getItem("chevara"));
  });
  const addNewItem = (newOneText) => {
    const newOb = {
      id: new Date().getTime(),
      name: newOneText,
      packed: false,
    };
    const news = [...item, newOb];
    setItem(news);
  };

  const removeAllTasks = () => {
    setItem([]);
  };

  const resetInitial = () => {
    setItem(item);
  };

  const markAllAsComplete = () => {
    const allComplete = item.map((i) => {
      return { ...i, packed: true };
    });
    setItem(allComplete);
  };

  const markAllInComplete = () => {
    const nonComplete = item.map((i) => {
      return { ...i, packed: false };
    });
    setItem(nonComplete);
  };

  const remeoveElement = (id) => {
    const newWithRemoving = item.filter((i) => i.id != id);
    setItem(newWithRemoving);
  };
  const toggleIteme = (id) => {
    const newItem = item.map((it) => {
      if (it.id === id) {
        return { ...it, packed: !it.packed };
      }
      return it;
    });
    setItem(newItem);
  };
  useEffect(() => {
    localStorage.setItem("chevara", JSON.stringify(item));
  }, [item]);
  return (
    <>
      <itemContext.Provider
        value={{
          item,
          addNewItem,
          remeoveElement,
          toggleIteme,
          markAllAsComplete,
          markAllInComplete,
          removeAllTasks,
          resetInitial,
        }}
      >
        {children}
      </itemContext.Provider>
    </>
  );
};

export default ItemsContextProvider;
