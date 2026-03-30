<script>
	import Button from "$lib/Button.svelte";
	import TaskList from "$lib/TaskList.svelte";
	import Timer from "$lib/Timer.svelte";

	import {addTask, loadTasks} from "$lib/tasks.svelte"

	var tasks = $state([])
	var timer = 2930948

	loadTasks(tasks)

	const addTaskBound = (taskname) => addTask(tasks, taskname)

</script>

<!-- Task List -->
<div class="flex flex-col">
	<div class="flex flex-row">
		<Timer {timer}></Timer>
		<TaskList {tasks} addTask={addTaskBound}></TaskList>
	</div>
	<div class="flex justify-end">
		<a href="/settings">
			<Button text="Settings"></Button>
		</a>
	</div>
	
</div>
