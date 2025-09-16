<script>
    import Dot from "../../components/back.svelte";
    import Job from "../../components/work/job.svelte";
    import Source from "../../components/work/source.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="m-4 justify-center flex">
    <div class="sm:max-lg:w-8/12 lg:w-6/12">
        <div class="text-2xl text-neutral-600 dark:text-neutral-300 font-light">
            Past Work
        </div>
        <div class="mt-2 space-y-2">
            {#await data.jobs}
                {#each Array(3).fill(null) as _}
                    <div
                        class="bg-neutral-200 dark:bg-neutral-800 p-16 animate-pulse"
                    ></div>
                {/each}
            {:then}
                {#each data.jobs as job}
                    <Job {...job} />
                {/each}
            {:catch error}
                <pre>{error.stack}</pre>
            {/await}
        </div>
        <div
            class="mt-20 text-2xl text-neutral-600 dark:text-neutral-300 font-light"
        >
            Notable contributions
        </div>
        <div class="mt-2 space-y-2">
            {#await data.source}
                {#each Array(3).fill(null) as _}
                    <div
                        class="bg-neutral-200 dark:bg-neutral-800 p-8 animate-pulse"
                    ></div>
                {/each}
            {:then}
                {#each data.source as source}
                    <Source {...source} />
                {/each}
            {:catch error}
                <pre>{error.stack}</pre>
            {/await}
        </div>
    </div>
</div>

<Dot />
