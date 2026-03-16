<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<div class="flex w-screen h-screen justify-center items-center bg-gray-100">
	{@render children()}
</div>

