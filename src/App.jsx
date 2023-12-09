import { useState } from "react";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import { initialItems } from "./lib/contsant";
function App() {
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
    setItem(initialItems);
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

  return (
    <>
      <Background></Background>
      <main>
        <Header
          totalItem={item.length}
          packedNumber={item.filter((i) => i.packed).length}
        ></Header>
        <ItemList
          item={item}
          remeoveElement={remeoveElement}
          toggleIteme={toggleIteme}
        ></ItemList>
        <Sidebar
          addNewItem={addNewItem}
          removeAllTasks={removeAllTasks}
          resetInitial={resetInitial}
          markAllAsComplete={markAllAsComplete}
          markAllInComplete={markAllInComplete}
        ></Sidebar>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
