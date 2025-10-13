<script>
    import Dot from "../../components/back.svelte";
    import Project from "../../components/projects/project.svelte";
    import Loading from "../../components/projects/loading.svelte";

    
    /**
     * @typedef {Object} Props
     * @property {import('./$types').PageData} data
     */

    /** @type {Props} */
    let { data } = $props();
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<!--Maybe add a compact mode toggle, shows a list but only name and link-->
<div class="m-4 gap-2 flex flex-col">
    {#await data}
        {#each Array(3).fill(null) as _}
            <Loading />
        {/each}
    {:then}
        {#each data.projects as project}
            <Project {...project} />
        {/each}
    {:catch error}
        <pre>{error.stack}</pre>
    {/await}
</div>

<Dot />
