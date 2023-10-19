import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SidebarToggle from "./components/SidebarToggle/SidebarToggle";
import Filterbar from "./components/Filterbar/Filterbar";

function App() {
  const [showSidebar, setShowSidebar] = useState("");
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SidebarToggle
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
}

export default App;
