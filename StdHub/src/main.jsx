import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './features/auth/Signup.jsx';
import ChatBox from './components/ChatBox.jsx';
import Login from './features/auth/Login.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { AuthProvider } from './context/AuthContext.jsx'; // import it
import Dashboard from './features/dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/chats", element: <ChatBox /> },
      // Add more main routes here
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
