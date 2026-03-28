// import { useSelector } from "react-redux";
// import ActivityFeed from "../components/ActivityFeed";
// import CalendarView from "../components/CalendarView";

// import { FiFolder, FiCheckCircle, FiClock, FiList } from "react-icons/fi";

// function Dashboard() {
//   const currentUserId = localStorage.getItem("current_user_id");


// const allTasks = useSelector((state) => state.tasks);

// const projects = allProjects.filter(
//   (p) => p.userId === currentUserId
// );

// const tasks = allTasks.filter(
//   (t) => t.userId === currentUserId
// );

//   const totalProjects = projects.length;
//   const totalTasks = tasks.length;

//   const completedTasks = tasks.filter(
//     (task) => task.status === "Completed"
//   ).length;

//   const pendingTasks = tasks.filter(
//     (task) => task.status !== "Completed"
//   ).length;

//   const completionRate =
//     totalTasks === 0
//       ? 0
//       : Math.round((completedTasks / totalTasks) * 100);

//   return (
//     <div className="p-4 sm:p-6 md:p-10 text-gray-900 dark:text-white">

//       <h1 className="text-2xl sm:text-3xl font-bold mb-10">
//         Dashboard
//       </h1>

//       {/* STATS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

//         {[{
//           title: "Projects",
//           value: totalProjects,
//           icon: <FiFolder />
//         },{
//           title: "Tasks",
//           value: totalTasks,
//           icon: <FiList />
//         },{
//           title: "Completed",
//           value: completedTasks,
//           icon: <FiCheckCircle />
//         },{
//           title: "Pending",
//           value: pendingTasks,
//           icon: <FiClock />
//         }].map((item, i) => (

//           <div key={i}
//             className="border border-gray-200 dark:border-gray-800 
//             bg-white dark:bg-gray-900 
//             p-5 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
//           >
//             <div className="text-xl text-gray-700 dark:text-gray-300">
//               {item.icon}
//             </div>

//             <div>
//               <h2 className="text-sm text-gray-500 dark:text-gray-400">
//                 {item.title}
//               </h2>
//               <p className="text-2xl font-bold">
//                 {item.value}
//               </p>
//             </div>
//           </div>

//         ))}

//         {/* Completion */}
//         <div className="col-span-full border border-gray-200 dark:border-gray-800 
//         bg-white dark:bg-gray-900 p-5 rounded-xl">

//           <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
//             Completion Rate
//           </h2>

//           <p className="text-3xl font-bold mb-3">
//             {completionRate}%
//           </p>

//           <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
//             <div
//               className="h-2 rounded-full bg-gray-900 dark:bg-white transition-all"
//               style={{ width: `${completionRate}%` }}
//             />
//           </div>
//         </div>

//       </div>

//       {/* LOWER SECTION */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

//         <div className="border border-gray-200 dark:border-gray-800 
//         bg-white dark:bg-gray-900 rounded-xl p-4">
//           <ActivityFeed limit={5} />
//         </div>

//         <div className="border border-gray-200 dark:border-gray-800 
//         bg-white dark:bg-gray-900 rounded-xl p-4">
//           <CalendarView />
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;


import { useSelector } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";
import CalendarView from "../components/CalendarView";

import { FiFolder, FiCheckCircle, FiClock, FiList } from "react-icons/fi";

function Dashboard() {

  const currentUserId = localStorage.getItem("current_user_id");

  const allProjects = useSelector((state) => state.projects) || [];
  const allTasks = useSelector((state) => state.tasks) || [];

  //  SAFE FILTER 
  const projects = currentUserId
    ? allProjects.filter((p) => p.userId === currentUserId)
    : [];

  const tasks = currentUserId
    ? allTasks.filter((t) => t.userId === currentUserId)
    : [];

  const totalProjects = projects.length;
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="p-4 sm:p-6 md:p-10 text-gray-900 dark:text-white">

      <h1 className="text-2xl sm:text-3xl font-bold mb-10">
        Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {[{
          title: "Projects",
          value: totalProjects,
          icon: <FiFolder />
        },{
          title: "Tasks",
          value: totalTasks,
          icon: <FiList />
        },{
          title: "Completed",
          value: completedTasks,
          icon: <FiCheckCircle />
        },{
          title: "Pending",
          value: pendingTasks,
          icon: <FiClock />
        }].map((item, i) => (

          <div key={i}
            className="border border-gray-200 dark:border-gray-800 
            bg-white dark:bg-gray-900 
            p-5 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
          >
            <div className="text-xl text-gray-700 dark:text-gray-300">
              {item.icon}
            </div>

            <div>
              <h2 className="text-sm text-gray-500 dark:text-gray-400">
                {item.title}
              </h2>
              <p className="text-2xl font-bold">
                {item.value}
              </p>
            </div>
          </div>

        ))}

        {/* Completion */}
        <div className="col-span-full border border-gray-200 dark:border-gray-800 
        bg-white dark:bg-gray-900 p-5 rounded-xl">

          <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Completion Rate
          </h2>

          <p className="text-3xl font-bold mb-3">
            {completionRate}%
          </p>

          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
            <div
              className="h-2 rounded-full bg-gray-900 dark:bg-white transition-all"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>

      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        <div className="border border-gray-200 dark:border-gray-800 
        bg-white dark:bg-gray-900 rounded-xl p-4">
          <ActivityFeed limit={5} />
        </div>

        <div className="border border-gray-200 dark:border-gray-800 
        bg-white dark:bg-gray-900 rounded-xl p-4">
          <CalendarView />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;