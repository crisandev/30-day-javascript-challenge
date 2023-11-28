import "./App.css";
import DrumKit from "./components/AllProjects/1DrumKit/DrumKit";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import StarAnimation from "./components/StarAnimation/StarAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

const HomeComponent = () => {
   return (
      <div className="App">
         <StarAnimation />
         <Main />
         <Projects />
      </div>
   );
};

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="project" element={<DrumKit />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
