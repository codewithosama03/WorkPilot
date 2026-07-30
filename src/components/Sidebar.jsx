
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaChevronDown,
  FaTrash,
} from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";

import {
  switchOrganization,
  deleteOrganization,
} from "../redux/organizationSlice";

import { ThemeContext } from "../context/ThemeContext";

import DeleteWorkspaceModal from "./DeleteWorkspaceModal";

function Sidebar({ openWorkspaceModal }) {
  const dispatch = useDispatch();
  const { user } = useUser();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [workspaceToDelete, setWorkspaceToDelete] = useState(null);

  const allOrganizations = useSelector(
    (state) => state.organizations.organizations
  );

  const organizations = allOrganizations.filter(
    (org) => org.userId === user?.id
  );

  const currentOrgId = useSelector(
    (state) => state.organizations.currentOrganization
  );

  const currentOrg = organizations.find(
    (org) => org.id === currentOrgId
  );

  const openDeleteModal = (workspace) => {
    setWorkspaceToDelete(workspace);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!workspaceToDelete) return;

    dispatch(deleteOrganization(workspaceToDelete.id));

    setWorkspaceToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="w-64 h-screen sticky top-0 bg-gray-900 text-white flex flex-col">

        <div className="p-6 flex items-center justify-between border-b border-gray-800">

          <h2 className="text-2xl font-bold">
            WorkPilot
          </h2>

          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-800 transition"
          >
            {theme === "dark" ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-300" />
            )}
          </button>

        </div>

        <div className="flex-1 overflow-y-auto p-6">

          <div className="relative mb-6">

            <button
              onClick={() =>
                setDropdownOpen(!dropdownOpen)
              }
              className="flex items-center justify-between w-full bg-gray-800 p-2 rounded"
            >
              <div className="flex items-center gap-2">

                <img
                  src={
                    currentOrg?.image ||
                    "/default-workspace.png"
                  }
                  className="w-8 h-8 rounded"
                />

                <span>
                  {currentOrg?.name ||
                    "Select Workspace"}
                </span>

              </div>

              <FaChevronDown />

            </button>

            {dropdownOpen && (

              <div className="absolute mt-2 w-full bg-gray-800 rounded shadow-lg z-50">

                {organizations.map((org) => (

                  <div
                    key={org.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-700"
                  >

                    <div
                     className="flex flex-1 items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-700 transition"
  onClick={() => {
    dispatch(switchOrganization(org.id));
    setDropdownOpen(false);
  }}
                    >

                      <img
                        src={
                          org.image ||
                          "/default-workspace.png"
                        }
                        className="w-7 h-7 rounded"
                      />

                      <span>{org.name}</span>

                    </div>

                    <FaTrash
                      className="text-red-400 cursor-pointer hover:text-red-300"
                      onClick={() =>
                        openDeleteModal(org)
                      }
                    />

                  </div>

                ))}

                <div className="border-t border-gray-700 mt-1">

                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      openWorkspaceModal();
                    }}
                    className="w-full text-left p-2 text-blue-400 hover:bg-gray-700"
                  >
                    + Create Workspace
                  </button>

                </div>

              </div>

            )}

          </div>

          <nav className="flex flex-col gap-4">

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded ${
                  isActive
                    ? "bg-gray-700"
                    : "hover:text-blue-400"
                }`
              }
            >
              <FaHome />
              Dashboard
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded ${
                  isActive
                    ? "bg-gray-700"
                    : "hover:text-blue-400"
                }`
              }
            >
              <FaProjectDiagram />
              Projects
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded ${
                  isActive
                    ? "bg-gray-700"
                    : "hover:text-blue-400"
                }`
              }
            >
              <FaUser />
              Profile
            </NavLink>

          </nav>

        </div>

      </div>

      <DeleteWorkspaceModal
        isOpen={showDeleteModal}
        workspaceName={workspaceToDelete?.name}
        onCancel={() => {
          setWorkspaceToDelete(null);
          setShowDeleteModal(false);
        }}
        onConfirm={confirmDelete}
      />
    </>
  );
}

export default Sidebar;

