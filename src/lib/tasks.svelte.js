// Functions to edit the task list

export function addTask(tasks, taskname) {
	tasks.push(taskname)
}

export function removeLast(tasks) {
    if (tasks.length == 0) {
        return
    }
    
    tasks.pop()
}

export function removeFirst(tasks) {
    if (tasks.length == 0) {
        return
    }

    tasks.splice(0, 1)
}

export function loadTasks(tasks) {
    // Pull tasks from SupaBase

    // Test Data
    tasks.splice(0, tasks.length, "Task 1", "Task 2", "Task 3", "Task 4")
}

export function sortTasks(tasks) {
    // Create custom sorting algorithm
    tasks.sort()
}


