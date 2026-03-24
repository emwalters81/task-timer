<script>
	import Button from "$lib/Button.svelte";
	import TaskList from "$lib/TaskList.svelte";
	import Timer from "$lib/Timer.svelte";

	var tasks = $state(["Task 1", "Task 2", "Task 3"])
	var timer = 2930948

	function addTask(taskname) {
		tasks.push(taskname)
	}
</script>

<!-- Task List -->
<div class="flex flex-col">
	<div class="flex flex-row">
		<Timer {timer}></Timer>
		<TaskList {tasks} {addTask}></TaskList>
	</div>
	<div class="flex justify-end">
		<a href="/settings">
			<Button text="Settings"></Button>
		</a>
	</div>
	
</div>
