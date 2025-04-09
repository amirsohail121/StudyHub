import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sidebar />
    </>
  );
}

export default App;
