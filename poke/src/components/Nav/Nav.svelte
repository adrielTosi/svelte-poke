<script lang="ts">
	import { page } from '$app/stores';
	import { paths } from '../../constants';
</script>

<nav class="nav" class:absolute={$page.url.pathname !== '/'}>
	<ul class="routes">
		{#each paths as path}
			<li>
				<a
					href={path.path}
					class:active={$page.url.pathname === path.path ||
						($page.url.pathname.indexOf(path.path) > -1 && path.path !== '/')}>{path.title}</a
				>
			</li>
		{/each}
	</ul>
	<ul class="out">
		<li>
			<a target="_blank" href="https://danielemeli.com">Author</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-black);
		font-size: 13px;

		@media screen and (min-width: 1400px) {
			font-size: 16px;
		}
		&.absolute {
			position: absolute;
			width: 100%;
		}
	}
	.routes {
		display: flex;
	}
	li {
		padding-right: 14px;
		padding-left: 14px;
		overflow: hidden;
	}
	a {
		position: relative;
		display: inline-block;
		padding-top: 14px;
		padding-bottom: 14px;

		@media screen and (min-width: 1400px) {
			padding-top: 20px;
			padding-bottom: 20px;
		}

		&,
		&:active,
		&:visited {
			color: var(--color-black);
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5px;
			background-color: var(--color-black);
			transform: translateY(100%);
			transition: transform var(--animation-duration), opacity var(--animation-duration);
		}

		&:hover {
			&::after {
				opacity: 0.6;
				transform: translateY(0%);
			}
		}
	}
	.active {
		&::after {
			transform: translateY(0%);
		}
	}
</style>
