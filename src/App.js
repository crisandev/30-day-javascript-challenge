import "./App.css";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import StarAnimation from "./components/StarAnimation/StarAnimation";

function App() {
   return (
      <div className="App">
         <StarAnimation />
         <Main />
         <Projects />
      </div>
   );
}

export default App;
