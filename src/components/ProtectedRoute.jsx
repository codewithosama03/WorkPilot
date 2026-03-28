import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn]);

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;