<script>
    var {options} = $props();

</script>

<div class="flex flex-col items-center justify-start p-4 bg-white w-2xl">
    {#each options as option}
        <div class="p-2 hover:bg-gray-200 cursor-pointer">{option}</div>
    {/each}
</div>