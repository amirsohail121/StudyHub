import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Signup from "./features/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Other routes */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Sidebar />
      {/* <ChatBox /> */}

      {/* Add Routes below */}
    </>
  );
}

export default App;
