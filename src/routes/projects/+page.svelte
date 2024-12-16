<script>
  import Dot from "../../components/back.svelte";
  import Project from "../../components/projects/project.svelte";
  import Loading from "../../components/projects/loading.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="m-4 gap-2 flex flex-col">
  {#await data.projects}
    {#each Array(3).fill(null) as _}
      <Loading />
    {/each}
  {:then projects}
    {#each data.projects as project}
      <Project {...project} />
    {/each}
  {:catch error}
    <pre>{error.stack}</pre>
  {/await}
</div>

<Dot />
