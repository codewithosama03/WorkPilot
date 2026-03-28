import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function ProtectedRoute({ children }) {

  const { isSignedIn, isLoaded, user } = useUser();

  //  Wait until Clerk loads
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  //  Not logged in → redirect
  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  //  Store user id safely
  if (user?.id) {
    localStorage.setItem("current_user_id", user.id);
  }

  //  Allow access
  return children;
}

export default ProtectedRoute;