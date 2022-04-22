<script lang="ts">
import { getFavoriteStore } from '../stores/favorite';

    import {fade} from 'svelte/transition';
    export let id: number;

    $: isFavorite = getFavoriteStore(id.toString());

    function toggleFavorite() {
        $isFavorite = !$isFavorite;
    }
</script>

<div class='pic'>
    {id}
    <button on:click={toggleFavorite}>
        toggle
    </button>
    {#if $isFavorite}
        <div transition:fade>FAV</div>
    {/if}
</div>

<style>
    .pic {
        height: 200px;
        width: 200px;
        margin: 8px;
        background-color:aqua;
    }
</style>