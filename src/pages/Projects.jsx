import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useUser } from "@clerk/clerk-react";

import ProjectCard from "../components/ProjectCard";
import { addProject } from "../redux/projectSlice";

function Projects() {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects);
  const currentOrg = useSelector(
    (state) => state.organizations.currentOrganization
  );

  //  TEMP USER 

  const { user } = useUser();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [error, setError] = useState("");

  const handleCreateProject = () => {
    if (!currentOrg) {
      setError("Please create a workspace first before adding a project.");
      return;
    }

    if (!name.trim()) {
      setError("Project name is required.");
      return;
    }

    dispatch(
      addProject({
        id: Date.now(),
        orgId: currentOrg,
        name,
        description,
        status: "Active",
         userId: user?.id 
      })
    );

    setName("");
    setDescription("");
    setError("");
  };

  // FILTER BY USER + ORG
   const orgProjects = projects.filter(
  (project) =>
    project.orgId === currentOrg &&
    project.userId === user?.id
);

  const filteredProjects = orgProjects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "All" || project.status === statusFilter)
    );
  });

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-full p-4 sm:p-6 lg:p-10">

        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Projects
        </h1>

        {/* CREATE PROJECT */}
        <div className="mb-8 p-4 rounded-xl border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">

          {error && (
            <div className="mb-4 p-3 rounded-lg border 
              bg-red-100 text-red-700 
              border-red-300 
              dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
              {error}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-3">

            <input
              type="text"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full flex-1 border p-2 rounded 
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-700 
              text-gray-900 dark:text-white"
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full flex-1 border p-2 rounded 
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-700 
              text-gray-900 dark:text-white"
            />

            <button
              onClick={handleCreateProject}
              className="px-4 py-2 rounded 
              bg-gray-900 text-white 
              dark:bg-white dark:text-black 
              transition"
            >
              Create
            </button>

          </div>
        </div>

        {/* FILTERS */}
        <div className="mb-6 p-4 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm">

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full flex-1 border p-2 rounded 
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-700 
              text-gray-900 dark:text-white"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-48 border p-2 rounded 
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-700 
              text-gray-900 dark:text-white"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>

          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="p-4 sm:p-6 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Projects;