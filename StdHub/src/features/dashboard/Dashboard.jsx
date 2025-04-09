import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard.jsx";
import StudentRequestCard from "../../components/StudentRequestCard.jsx";

const Dashboard = () => {
  const { user } = useAuth();
  const [tutors, setTutors] = useState([]);
  const [studentRequests, setStudentRequests] = useState([]);

  useEffect(() => {
    if (user?.role === "student") {
      setTutors([
        { id: 1, name: "John Doe", subject: "Math", experience: "5 years" },
        { id: 2, name: "Jane Smith", subject: "Physics", experience: "3 years" },
      ]);
    } else if (user?.role === "tutor") {
      setStudentRequests([
        { id: 1, student: "Alice", topic: "Algebra", message: "Need help with equations." },
        { id: 2, student: "Bob", topic: "Calculus", message: "Struggling with derivatives." },
      ]);
    }
  }, [user]);

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Welcome, {user.name || "User"}!</h2>

      {user.role === "student" ? (
        <>
          <h4 className="mb-3">Available Tutors</h4>
          <div className="row">
            {tutors.map((tutor) => (
              <div className="col-md-6" key={tutor.id}>
                <TutorCard tutor={tutor} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h4 className="mb-3">Student Requests</h4>
          <div className="row">
            {studentRequests.map((req) => (
              <div className="col-md-6" key={req.id}>
                <StudentRequestCard request={req} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
