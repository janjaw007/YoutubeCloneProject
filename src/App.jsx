import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SidebarToggle from "./components/SidebarToggle/SidebarToggle";
import Filterbar from "./components/Filterbar/Filterbar";
import OverlaySidebar from "./components/OverlaySidebar/OverlaySidebar";
import VideoGrid from "./components/VideoGrid/VideoGrid";

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  function onhandleShowSidebar() {
    setIsShowSidebar(!isShowSidebar);
    console.log("clicked", isShowSidebar);
  }

  return (
    <>
      <Navbar
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
        onhandleShowSidebar={onhandleShowSidebar}
      />
      {isShowSidebar && (
        <OverlaySidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
          onhandleShowSidebar={onhandleShowSidebar}
        />
      )}
      <SidebarToggle
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
        onhandleShowSidebar={onhandleShowSidebar}
      />
      <Filterbar />
      <VideoGrid />
    </>
  );
}

export default App;
