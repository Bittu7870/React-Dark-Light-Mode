import "./App.css";
import LightAndDarkMode from "./components/LightAndDarkMode";
import MyContext from "./context/MyContext";

const App = () => {
  return (
    <MyContext>
      <LightAndDarkMode />
    </MyContext>
  );
};

export default App;
