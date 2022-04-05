<script lang="ts">
	import { pokemonStore } from '../../store/store';
	import PokeCard from '../PokeCard/PokeCard.svelte';

	export let viewFull: boolean = false;
</script>

<ul class="poke-list" class:view-full={viewFull}>
	{#each $pokemonStore as pokemon}
		<li>
			<PokeCard data={pokemon} gridView={viewFull} />
		</li>
	{/each}
</ul>

<style lang="scss">
	.poke-list {
		display: grid;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		grid-template-columns: repeat(auto-fill, minmax(475px, 1fr));
		grid-auto-flow: column;
		grid-auto-columns: minmax(475px, 1fr);
		&.view-full {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
