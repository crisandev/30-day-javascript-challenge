import "./App.css";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import StarAnimation from "./components/StarAnimation/StarAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import projects from "./js/projects";

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
            {projects.map((p, i) => {
               return <Route key={i} path={p.path} element={p.component}></Route>;
            })}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
