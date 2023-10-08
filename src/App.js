import Content from "./Components/Content/Content";
import LeftSide from "./Components/LeftSide/LeftSide";
import './App.css'
import RightSide from "./Components/RightSide/RightSide";

function App() {
  return (
    <div  className="App">
        <LeftSide/>
        <Content/>
        <RightSide/>
    </div>
  );
}

export default App;
