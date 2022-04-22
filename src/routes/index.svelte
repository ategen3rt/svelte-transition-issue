<script lang="ts">
    import { page } from "$app/stores";
    import Photo from './_Photo.svelte'




    function getData(url: URL) {
        const page = url.searchParams.get('page') ?? '0';
        const id = parseInt(page) * 4;
        return [id, id + 1, id + 2, id + 3];
    }
    
    function getNextUrl(url: URL) {
        const page = url.searchParams.get('page') ?? '0';
        const nextPage = parseInt(page) + 1;
        const newUrl = new URL(url);
        newUrl.searchParams.set('page', nextPage.toString());
        return newUrl.toString();
    }

    function getPreviousUrl(url: URL) {
        const page = url.searchParams.get('page') ?? '0';
        const previousPage = parseInt(page) - 1;
        const newUrl = new URL(url);
        newUrl.searchParams.set('page', previousPage.toString());
        return newUrl.toString();
    }

    $: ids = getData($page.url);
    $: nextUrl = getNextUrl($page.url);
    $: previousUrl = getPreviousUrl($page.url);
</script>

<div>
    To reproduce the bug:
    <ol>
        <li>Click toggle</li>
        <li>Click next</li>
    </ol>
    Result: The page is duplicated.
    <div>
        Additionally: this only seems to happen if you haven't clicked next/previous before clicking toggle
    </div>
    <hr/>
</div>

<div class='nav'>
    <a href={previousUrl}>Previous</a>
    <a href={nextUrl}>Next</a>
</div>
<div>
{#each ids as id}
    <Photo {id}/>
{/each}
</div>


<style>
    .nav {
        width: 100%;
    }
</style>