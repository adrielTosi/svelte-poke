<script context="module">
	import { getPokemons } from '../services/api';
	import { pokemonStore } from '../store/store';

	export const load = async ({ fetch }) => {
		const tmpPokemonsStore = await getPokemons(fetch, 0, 15);
		pokemonStore.update(() => tmpPokemonsStore);

		return tmpPokemonsStore;
	};
</script>

<script lang="ts">
	import Nav from '../components/Nav/Nav.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Nav />
<slot />

<style global lang="scss">
	@import '../styles/global.scss';
</style>
