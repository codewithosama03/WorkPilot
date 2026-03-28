import { useUser, SignOutButton } from "@clerk/clerk-react";

function Profile() {

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="p-10 text-black dark:text-white">

      <h1 className="text-3xl font-bold mb-8">
        Profile
      </h1>

      <div className="max-w-xl border dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">

        <div className="mb-4">
          <p className="text-gray-500">Name</p>
          <p className="text-lg font-semibold">
            {user?.fullName || "No Name"}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Email</p>
          <p className="text-lg font-semibold">
            {user?.primaryEmailAddress?.emailAddress || "No Email"}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-500">Role</p>
          <p className="text-lg font-semibold">
            Project Manager
          </p>
        </div>

        {/*  CLERK LOGOUT BUTTON */}
        <SignOutButton redirectUrl="/" >
          <button
            className="w-60 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition cursor-pointer"
          >
            Logout
          </button>
        </SignOutButton>

      </div>

    </div>
  );
}

export default Profile;