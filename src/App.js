import "./App.css";
// import ConfigForm from "./components/ConfigForm";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
  <>
  <Navbar title="TextUtility" />
  {/* <ConfigForm /> */}
    <TextForm heading="Enter the text to analyze"/>
  </>
  );
}

export default App;
