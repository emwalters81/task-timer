import { flushSync } from 'svelte';
import { expect, test } from 'vitest';
import { addTask, removeLast, removeFirst, loadTasks, sortTasks} from './tasks.svelte.js';


test('Add Task', () => {
	let tasks = ["Task 1"]

    addTask(tasks, "Task 2")

    expect(tasks).toEqual(["Task 1", "Task 2"])
});

test('Remove Last', () => {
	let tasks = ["Task 1", "Task 2", "Task 3"]

    removeLast(tasks)

    expect(tasks).toEqual(["Task 1", "Task 2"])

});

test('Remove First', () => {
	let tasks = ["Task 1", "Task 2", "Task 3"]

    removeFirst(tasks)

    expect(tasks).toEqual(["Task 2", "Task 3"])
});

test('Load Tasks', () => {
	let tasks = []

    loadTasks(tasks)

    expect(tasks).toEqual(["Task 1", "Task 2", "Task 3", "Task 4"])
});

test('Sort Tasks', () => {
	let tasks = ["Task 2", "Task 1", "Task 3"]

    sortTasks(tasks)

    expect(tasks).toEqual(["Task 1", "Task 2", "Task 3"])

});