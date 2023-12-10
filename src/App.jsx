import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemsContextProvider from "./context/ItemsContextProvider";
function App() {
  return (
    <>
      <Background></Background>
      <main>
        <ItemsContextProvider>
          <Header></Header>
          <ItemList></ItemList>
          <Sidebar></Sidebar>
        </ItemsContextProvider>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
