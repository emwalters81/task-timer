
<!-- TODO: 
        Add dashboard at top and/or side
        Add settings functionability after more of the site has been implemented
        Clean up design -->


<script>
    import Option from '$lib/Option.svelte';
</script>

<div class="flex flex-col items-center justify-center p-4 pt-20 bg-amber-50 w-full min-h-screen">
<!-- Add options here -->
    <div class="flex flex-col p-4 border-2 bg-white rounded-2xl">
        <Option optionName="Account Settings" />
        <Option optionName="Accessibility" />
    </div>
    
</div>