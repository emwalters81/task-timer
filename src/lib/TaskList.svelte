<script>
	import AddTask from "./AddTask.svelte";
    import TaskItem from "./TaskItem.svelte";
	import Timer from "./Timer.svelte";


    var {tasks, addTask} = $props()
</script>


<div class="flex flex-col rounded-2xl bg-red-300 pt-10 pb-10 pr-2 pl-2 border-2 border-black ml-5">
    <!-- Add Task -->
    <AddTask {addTask}></AddTask>

    <!-- Tasks -->
    {#each tasks as task}
        <TaskItem {task}></TaskItem>
    {/each}
</div>