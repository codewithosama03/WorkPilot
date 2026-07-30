import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LoadingScreen from "./LoadingScreen";

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;