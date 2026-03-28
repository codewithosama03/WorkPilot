import { useSelector } from "react-redux";
import useTaskSearch from "../hooks/useTaskSearch";
import TaskCard from "./TaskCard";

function KanbanBoard({ projectId, searchQuery = "" }) {
  const tasks = useSelector((state) => state.tasks);

  const projectTasksRaw = tasks.filter(
    (task) => task.projectId === Number(projectId)
  );

  const projectTasks = useTaskSearch(projectTasksRaw, searchQuery);

  const columns = ["Todo", "In Progress", "Completed", "Blocked"];

  return (
    <div className="w-full">
      {/* RESPONSIVE GRID */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => {
          const columnTasks = projectTasks.filter(
            (task) => task.status === column
          );

          return (
            <div
              key={column}
              className="
              bg-gray-50 dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              rounded-xl p-4
              flex flex-col
              "
            >
              <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4">
                {column}
              </h2>

              <div className="flex flex-col gap-3">
                {columnTasks.length === 0 ? (
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    No tasks
                  </p>
                ) : (
                  columnTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KanbanBoard;