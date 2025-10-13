<script>
    import Dot from "../../components/back.svelte";
    import Masonry from "svelte-masonry";
    import { Image } from "@unpic/svelte";

    /**
     * @typedef {Object} Props
     * @property {import('./$types').PageData} data
     */

    /** @type {Props} */
    let { data } = $props();
</script>

<svelte:head>
    <title>Design</title>
</svelte:head>

<div class="m-4">
    <div
        class="text-2xl text-neutral-600 dark:text-neutral-300 font-light my-8"
    >
        Some Designs
    </div>
    <Masonry gridGap={"0.75rem"} colWidth={"minmax(Min(20em, 100%), 1fr)"}>
        {#await data}
            {#each Array(4).fill(null) as _}
                <div
                    class="bg-neutral-200 dark:bg-neutral-800 p-32 animate-pulse"
                ></div>
            {/each}
        {:then}
            {#each data.designs as item}
                <!-- inpsired by cristicretu -->
                <div
                    class="border border-neutral-200 rounded-lg dark:border-neutral-800 p-2"
                >
                    <div class="relative overflow-hidden rounded-md">
                        <Image
                            src={item.thumbnail}
                            layout="constrained"
                            alt={item.description}
                            class="rounded-md"
                        />

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        ></div>

                        <div class="absolute bottom-0 left-0 right-0 p-1">
                            <h3 class="text-white text-sm drop-shadow-lg">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                </div>
            {/each}
        {:catch error}
            <pre>{error.stack}</pre>
        {/await}
    </Masonry>
</div>

<Dot />
