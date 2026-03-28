import { SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, isLoaded, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">

      <div className="w-[420px] bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">

        <SignUp
          routing="path"
          path="/signup"
          afterSignUpUrl="/dashboard"
          appearance={{
            elements: {
              card: "shadow-none bg-transparent",
            },
          }}
        />

      </div>

    </div>
  );
}

export default Signup;