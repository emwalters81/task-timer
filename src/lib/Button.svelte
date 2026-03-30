<script>
    var {text, color="bg-white", onClick} = $props()

    var onclick = $state(false)
</script>


<div class={"pr-10 pl-10 pb-2 pt-2 shadow-[4px_4px_0px_0px_#000] m-2 border-2 hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer " +
"border-black rounded-2xl flex justify-start items-start " + color}>
    {text}
</div>