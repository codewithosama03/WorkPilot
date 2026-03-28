import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState } from "react";

import SearchBar from "../components/SearchBar";
import useTaskSearch from "../hooks/useTaskSearch";

import { useUser } from "@clerk/clerk-react";

import TaskCard from "../components/TaskCard";
import KanbanBoard from "../components/KanbanBoard";

import { addTask } from "../redux/taskSlice";
import { addActivity } from "../redux/activitySlice";

import ActivityFeed from "../components/ActivityFeed";
import CalendarView from "../components/CalendarView";

function ProjectDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects);
  const tasks = useSelector((state) => state.tasks);

  // TEMP USER
  // const userId = "temp-user";
  const { user } = useUser();

  const project = projects.find((p) => p.id === Number(id));

  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [assignee, setAssignee] = useState("Unassigned");

  const [taskFilter, setTaskFilter] = useState("All");
  const [viewMode, setViewMode] = useState("list");

  const [searchQuery, setSearchQuery] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSearch = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const handleAddTask = () => {
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      projectId: Number(id),
      status: "Todo",
      priority: priority,
      assignee: assignee,
      dueDate: dueDate,
      userId: user?.id 
    };

    dispatch(addTask(newTask));

    dispatch(
      addActivity({
        id: Date.now(),
        message: `Created task "${taskTitle}"`,
        time: new Date().toLocaleTimeString(),
      })
    );

    setTaskTitle("");
    setPriority("Medium");
    setAssignee("Unassigned");
    setDueDate("");
  };



const projectTasks = tasks.filter(
  (task) =>
    task.projectId === Number(id) &&
    task.userId === user?.id
);

  const searchedTasks = useTaskSearch(projectTasks, searchQuery);

  const filteredTasks = searchedTasks.filter((task) => {
    if (taskFilter === "All") return true;
    return task.status === taskFilter;
  });

  const completedTasks = projectTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const totalTasks = projectTasks.length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-full p-4 sm:p-6 lg:p-10">

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
            {project.description}
          </p>
        </div>

        <div className="mb-8 p-5 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm">

          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Progress
            </p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {progress}%
            </p>
          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8 border p-4 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-3 dark:text-white">Add Task</h2>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Task title..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border p-2 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            <div className="flex gap-3 flex-wrap">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border p-2 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>

              <input
                type="text"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder="Assignee"
                className="border p-2 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border p-2 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />

              <button
                onClick={handleAddTask}
                className="bg-gray-900 text-white px-4 py-2 rounded dark:bg-white dark:text-black"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm">

          <div className="mb-6">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="flex gap-2 flex-wrap mb-6">
            {["All", "Todo", "In Progress", "Completed", "Blocked"].map((status) => (
              <button
                key={status}
                onClick={() => setTaskFilter(status)}
                className={`px-3 py-1 text-sm rounded-md border transition 
                ${
                  taskFilter === status
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap mb-6">
            {["list", "kanban", "calendar", "activity"].map((view) => (
              <button
                key={view}
                onClick={() => setViewMode(view)}
                className={`px-3 py-1 text-sm rounded-md border transition 
                ${
                  viewMode === view
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700"
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)} View
              </button>
            ))}
          </div>

          <div className="w-full min-h-[400px] rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-950 overflow-x-auto overflow-y-hidden">  

            {viewMode === "list" && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            )}

            {viewMode === "kanban" && (
              <div className="w-full">
                <KanbanBoard projectId={id} searchQuery={searchQuery} />
              </div>
            )}

            {viewMode === "calendar" && (
              <div className="w-full flex justify-center">
                <div className="w-full max-w-4xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl p-4">
                  <CalendarView tasks={projectTasks} full />
                </div>
              </div>
            )}

            {viewMode === "activity" && (
              <ActivityFeed />
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;