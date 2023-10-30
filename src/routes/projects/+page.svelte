<script>
  import { onMount } from "svelte";
  import Dot from "../../components/back.svelte";
  import Repo from "../../components/repos/repo.svelte";
  import Loading from "../../components/repos/loading.svelte";

  let reposLoad = [];

  onMount(async () => {
    reposLoad = fetch(
      "https://gh-pinned-repos.egoist.dev/?username=slumberdemon"
    ).then((response) => {
      if (response.ok) return response.json();
      throw new Error(response.status);
    });
  });
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="flex justify-center m-4">
  <div class="lg:w-4/12">
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {#await reposLoad}
        {#each Array(6).fill(null) as _}
          <Loading />
        {/each}
      {:then repos}
        {#each repos as repo}
          <Repo {...repo} />
        {/each}
      {:catch error}
        <pre>{error.stack}</pre>
      {/await}
    </div>
  </div>
</div>

<Dot />
