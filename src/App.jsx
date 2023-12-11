import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <Background></Background>
      <main>
        <Header></Header>
        <ItemList></ItemList>
        <Sidebar></Sidebar>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
