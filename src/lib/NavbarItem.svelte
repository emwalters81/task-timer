<script>
	import Button from '$lib/Button.svelte';
	let {href, text} = $props();
</script>

<div>
	<a {href}><Button {text}></Button></a>
</div>