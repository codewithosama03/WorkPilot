import { useDispatch } from "react-redux";
import {
  updateTaskStatus,
  deleteTask,
  updateTaskAssignee
} from "../redux/taskSlice";


function TaskCard({ task }) {

  const dispatch = useDispatch();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
      case "Medium":
        return "bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-200";
      case "High":
        return "bg-gray-400 text-gray-900 dark:bg-gray-500 dark:text-white";
      default:
        return "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div
      className="
      w-full 
      border border-gray-200 dark:border-gray-800 
      bg-white dark:bg-gray-900 
      p-4 rounded-xl cursor-grab 
      transition hover:shadow-md
      flex flex-col gap-3
      overflow-hidden
      "
    >

      {/* TOP */}
      <div className="flex flex-col gap-2">

        <p className="font-medium text-gray-900 dark:text-white break-words">
          {task.title}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}
          >
            {task.priority}
          </span>

          <span className="text-xs text-gray-500 dark:text-gray-400 break-words ">
            {task.assignee || "Unassigned"}
          </span>
        </div>

      </div>

      {/* CONTROLS */}
      <div className="flex flex-col gap-2">

        <select
          value={task.status}
          onChange={(e) =>
            dispatch(updateTaskStatus({
              id: task.id,
              status: e.target.value
            }))
          }
          className="
          w-full border p-2 rounded text-sm
          bg-white dark:bg-gray-800 
          border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-white
          "
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Blocked">Blocked</option>
        </select>

        <select
          value={task.assignee || "Unassigned"}
          onChange={(e) =>
            dispatch(updateTaskAssignee({
              id: task.id,
              assignee: e.target.value
            }))
          }
          className="
          w-full border p-2 rounded text-sm
          bg-white dark:bg-gray-800 
          border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-white
          "
        >
          <option value="Unassigned">Unassigned</option>
          <option value="Ali">Ali</option>
          <option value="John">John</option>
          <option value="Sarah">Sarah</option>
        </select>

        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="
          w-full text-sm px-3 py-2 rounded 
          bg-gray-900 text-white 
          dark:bg-white dark:text-black
          hover:opacity-90 transition
          "
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;