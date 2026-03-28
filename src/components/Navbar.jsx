import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 text-black dark:text-white relative z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold">WorkPilot</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
          <Link to="/signup" className="hover:text-blue-500">Signup</Link>
          <ThemeToggle />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[70%] max-w-sm 
              bg-white dark:bg-gray-900 
              z-50 p-6 flex flex-col gap-6 shadow-xl"
            >
              {/* HEADER (NEW) */}
              <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-bold">WorkPilot</h1>
                <ThemeToggle />
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="text-right text-2xl"
              >
                ✕
              </button>

              {/* LINKS */}
              <Link onClick={() => setOpen(false)} to="/" className="hover:text-blue-500">
                Home
              </Link>

              <Link onClick={() => setOpen(false)} to="/login" className="hover:text-blue-500">
                Login
              </Link>

              <Link onClick={() => setOpen(false)} to="/signup" className="hover:text-blue-500">
                Signup
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;