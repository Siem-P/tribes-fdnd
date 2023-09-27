<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

    export let data;
</script>


<section>
	<SliceZone slices={data.slices} {components} />
</section>