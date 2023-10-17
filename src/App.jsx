import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SidebarToggle from "./components/SidebarToggle/SidebarToggle";
import Filterbar from "./components/Filterbar/Filterbar";

function App() {
  return (
    <>
      <Navbar />
      <SidebarToggle />
    </>
  );
}

export default App;
