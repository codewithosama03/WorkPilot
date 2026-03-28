import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ tasks = [], full }) {

  // const tasks = useSelector((state) => state.tasks);

  const tasksByDate = {};

  tasks.forEach((task) => {

    if (!task.dueDate) return;

    const date = new Date(task.dueDate).toDateString();

    if (!tasksByDate[date]) {
      tasksByDate[date] = [];
    }

    tasksByDate[date].push(task);

  });

  return (
    <div className=" border rounded-xl p-3 sm:p-4 flex flex-col w-full">

      <h1 className="text-3xl font-bold mb-6 ">
        Calendar
      </h1>

<div className="w-full overflow-hidden">
  <div className="scale-[0.9] sm:scale-100 origin-top">
      <Calendar
        tileContent={({ date }) => {

          const key = date.toDateString();
          const dayTasks = tasksByDate[key];

          if (!dayTasks) return null;

          return (
            <div className="text-xs mt-1">

              {dayTasks.slice(0,2).map((task) => (
                <div
                  key={task.id}
                  className="bg-blue-500 text-white rounded px-1 mb-1"
                >
                  {task.title}
                </div>
              ))}

            </div>
          );

        }}
      />

  </div>
</div>


  

    </div>
  );
}

export default CalendarView;