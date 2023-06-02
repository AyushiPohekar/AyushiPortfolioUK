import { useContext } from "react";
import Contact from "./Contact/Contact";

import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./toggle/Toggle";
import { ThemeContext } from "./components/Context";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
   <Navbar/>
      {/* <Toggle />  */}
      <Intro />
      <About />
      <Skills/>
      <ProductList />
      <Contact />
 
    </div>
  );
}

export default App;
