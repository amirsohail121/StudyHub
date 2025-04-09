import Navbar from "../components/Navbar"; // Top navigation bar
import Sidebar from "../components/Sidebar"; // Side menu on the left
import { Outlet } from "react-router-dom"; // Placeholder for the page content

const MainLayout = () => {
  return (
    <div className="d-flex"> {/* Flex layout to place sidebar and content side by side */}

      <Sidebar /> {/* Left side: Sidebar component */}

      <div className="flex-grow-1"> {/* Right side: This part takes up remaining space */}

        <Navbar /> {/* Top bar inside main area */}

        <main className="p-3">
          <Outlet /> {/* This is where the current page content shows up */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
