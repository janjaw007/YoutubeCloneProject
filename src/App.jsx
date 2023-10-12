import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Filterbar from "./components/Filterbar/Filterbar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Filterbar />
    </>
  );
}

export default App;
