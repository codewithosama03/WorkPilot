import { useMemo } from "react";

function useTaskSearch(tasks, query) {

  const filteredTasks = useMemo(() => {

    if (!query) return tasks;

    return tasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );

  }, [tasks, query]);

  return filteredTasks;

}

export default useTaskSearch;