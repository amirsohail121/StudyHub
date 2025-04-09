import { NavLink } from "react-router-dom";
import '../styles/index.css';
import {
  FaHome,
  FaUser,
  FaComments,
  FaSearch,
  FaSignOutAlt,
  FaBook,
} from "react-icons/fa";

const Sidebar = () => {
  const userRole = "student"; // Get from auth later

  const commonLinks = [
    { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { label: "Chats", icon: <FaComments />, path: "/chats" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
    { label: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
  ];

  const studentLinks = [
    { label: "Find Tutors", icon: <FaSearch />, path: "/discover" },
    { label: "My Bookings", icon: <FaBook />, path: "/bookings" },
  ];

  const tutorLinks = [
    { label: "Manage Profile", icon: <FaUser />, path: "/tutor/profile" },
    { label: "My Students", icon: <FaBook />, path: "/tutor/students" },
  ];

  const finalLinks = [
    ...commonLinks.slice(0, 1),
    ...(userRole === "student" ? studentLinks : tutorLinks),
    ...commonLinks.slice(1),
  ];

  return (
    <aside
      className="bg-white shadow-sm d-flex flex-column p-4 vh-100"
      style={{ width: "250px" }}
    >


      <nav className="d-flex flex-column gap-2">
        {finalLinks.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 p-2 rounded text-decoration-none ${isActive
                ? "bg-primary text-white fw-semibold"
                : "text-dark hover-bg-light"
              }`
            }
            style={{ transition: "all 0.2s ease" }}
          >
            <span style={{ fontSize: "1.1rem" }}>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
