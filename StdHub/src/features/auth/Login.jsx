import { useState } from "react";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in", { email, password });
    const dummyUser = { name: "Amit", email: "amit@example.com" };
    const selectedType = "student"; // or "tutor" from a dropdown

    login(dummyUser, selectedType);
    navigate("/dashboard");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card p-4 shadow border-primary" style={{ maxWidth: "400px", width: "100%", transition: 'all 0.3s ease' }}>

        <div className="text-center mb-3">
          <FaUserAlt size={50} className="text-primary mb-2" />
          <h3 className="text-primary">Login</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Login
          </button>
        </form>

        <p className="text-muted text-center mt-3" style={{ fontSize: "0.9rem" }}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
