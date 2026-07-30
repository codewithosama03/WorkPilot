import { FiLoader } from "react-icons/fi";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col items-center">

        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
          <FiLoader className="text-white text-3xl animate-spin" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          WorkPilot
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Loading your workspace...
        </p>

        <div className="flex gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
          <span
            className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>

      </div>
    </div>
  );
}

export default LoadingScreen;