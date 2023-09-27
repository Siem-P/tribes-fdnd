<script>
	/** @type {import("@prismicio/client").Content.SquadInfoSlice} */
	export let slice;

	
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<article>
			<p>{item.squad_relation.data.squad_name}</p>
		</article>
	{/each}
</section>


<pre>
	{JSON.stringify(slice, null, 2)}
</pre>