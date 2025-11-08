
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import WriterDashboard from "./pages/WriterDashboard";
import DeveloperDashboard from "./pages/DeveloperDashboard";

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Always load login first */}
        <Route path="/" element={<Login setUserRole={setUserRole} />} />

        {/* Conditional routes based on role */}
        <Route
          path="/writer"
          element={
            userRole === "writer" ? (
              <WriterDashboard />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/developer"
          element={
            userRole === "developer" ? (
              <DeveloperDashboard />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
