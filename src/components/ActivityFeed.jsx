import { useSelector } from "react-redux";



function ActivityFeed() {

  const activity = useSelector((state) => state.activity);

  return (

    <div className="mt-10  border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-900 dark:text-white">

      <h2 className="font-bold mb-4">Activity</h2>

      {activity.length === 0 && (
        <p className="text-gray-400 text-sm">
          No activity yet
        </p>
      )}

      <div className="flex flex-col gap-2">

        {activity.slice(-10).reverse().map((item) => (

          <div
            key={item.id}
            className="text-sm text-gray-600"
          >

            <span className="font-medium mr-2">
              {item.time}
            </span>

            {item.message}

          </div>

        ))}

      </div>

    </div>

  );

}

export default ActivityFeed;