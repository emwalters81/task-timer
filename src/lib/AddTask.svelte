<script>
	import Button from "./Button.svelte";
	import TypingBar from "./TypingBar.svelte";

    var newTask = $state("")
    var task = ""

    var {addTask} = $props()

    function onClick() {
        addTask(newTask)
        newTask = ""
    }

</script>

<div class="pr-10 pl-10 pb-2 pt-2 shadow-[4px_4px_0px_0px_#000] m-2 border-2
 border-black rounded-2xl flex flex-col justify-start items-start bg-orange-100">
    <TypingBar bind:value={newTask}></TypingBar>
    {task}
    <div class="flex justify-end w-full">
        <button onclick={onClick}>
            <Button text="Add Task"></Button>
        </button>
        
    </div>
</div>