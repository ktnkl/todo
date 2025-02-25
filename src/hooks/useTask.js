import { useSelector } from "react-redux"
import { selectPage } from "../store/reducers/page"

export const useSort = (tasks, processing) => {
  let filteredTasks = []
  if (processing.filter.completed.all) {
    filteredTasks = [...tasks]
  } else if (processing.filter.completed.completed) {
    filteredTasks = tasks.filter(function (task) {
      return task.completed === true
    })
  } else {
    filteredTasks = tasks.filter(function (task) {
      return task.completed === false
    })
  }

  if (processing.sort.newFirst === false) {
    return filteredTasks
  } else {
    let sortedTasks = [...filteredTasks]
    sortedTasks.sort((a, b) => {
      return b.id - a.id
    })
    return sortedTasks
  } 
}

export const useTask = (tasks, processing) => {
  const currentPage = useSelector(selectPage)
  const allTasks = useSort(tasks, processing)
  const startElement = (currentPage - 1) * 10

  return allTasks.splice(startElement, 10)
}