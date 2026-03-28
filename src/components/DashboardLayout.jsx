import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import CreateWorkspaceModal from "./CreateWorkspaceModal";

function DashboardLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);

 return (
  <div className="flex h-screen w-screen overflow-hidden bg-gray-100 dark:bg-gray-900">

    {/* Sidebar */}
    <div
      className={`
      fixed md:static
      z-40
      transform
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
      transition-transform duration-300
      `}
    >
      <Sidebar openWorkspaceModal={() => setIsWorkspaceModalOpen(true)} />
    </div>

    {/* Overlay */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black/40 md:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    )}

    {/* MAIN */}
    <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden p-4 sm:p-6">

      <button
        className="md:hidden mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      <div className="w-full max-w-full">
        <Outlet />
      </div>

    </main>

    <CreateWorkspaceModal
      isOpen={isWorkspaceModalOpen}
      onClose={() => setIsWorkspaceModalOpen(false)}
    />

  </div>
);
}

export default DashboardLayout;