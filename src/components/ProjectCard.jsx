import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProject, updateProjectStatus } from "../redux/projectSlice";
import { removeTasksByProject } from "../redux/taskSlice"; // ✅ IMPORT THIS
import { FiFolder } from "react-icons/fi";

function ProjectCard({ project }) {

  const dispatch = useDispatch();

  // HANDLE DELETE PROPERLY
  const handleDelete = () => {
    dispatch(deleteProject(project.id));
    dispatch(removeTasksByProject(project.id));
  };

  return (
    <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl hover:shadow-lg transition text-black dark:text-white flex flex-col justify-between">

      {/* TOP */}
      <Link to={`/projects/${project.id}`} className="flex items-start gap-3">

        {/* ICON */}
        <div className="text-4xl">
          <FiFolder className="text-3xl text-gray-600 dark:text-gray-300" />
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-semibold break-words">
            {project.name}
          </h2>

          <p className="text-gray-500 text-sm mt-1 break-words">
            {project.description}
          </p>
        </div>

      </Link>

      {/* STATUS */}
      <div className="mt-4">

        <p className="text-sm text-blue-600 mb-1">
          Status: {project.status}
        </p>

        <select
          value={project.status}
          onChange={(e) =>
            dispatch(updateProjectStatus({
              id: project.id,
              status: e.target.value
            }))
          }
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-1 rounded text-black dark:text-white"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Archived">Archived</option>
        </select>

      </div>

      {/* DELETE BUTTON */}
      <button
        onClick={handleDelete} 
        className="mt-4 bg-red-500 text-white py-1 rounded w-full"
      >
        Delete
      </button>

    </div>
  );
}

export default ProjectCard;