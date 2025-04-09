import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (

    <div className="auth-box p-4 shadow rounded bg-white" style={{ minWidth: "450px" }}>
      <Outlet /> {/* This renders either Login or Signup page */}
    </div>

  );
};

export default AuthLayout;
