<script>
    import { blur, fly } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    export let key = "";
    export let date = "";
    export let state = "";
    export let stack = [];
    export let description = "";
    export let links = [];

    let expanded = false;

    function expand() {
        expanded = !expanded;
    }

    $: expandedSwitch = expanded;
</script>

<!--colored tags maybe?-->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="border p-6 border-neutral-200 rounded-lg bg-white dark:bg-black dark:border-neutral-800 drop-shadow-sm cursor-pointer"
    on:click={expand}
    role="menu"
    tabindex="0"
    aria-label="Clickable project card"
>
    <!-- bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacitiy? -->
    <!-- https://www.youtube.com/watch?v=htGfnF1zN4g -->
    <div>
        <div class="flex justify-between items-center">
            <div class="dark:text-white sm:max-lg:text-xl text-sm">
                {date}
            </div>
            <div
                class="text-neutral-500 dark:text-neutral-400 cursor-not-allowed hide-small"
            >
                {state}
            </div>
        </div>

        <div
            class="lg:text-9xl my-4 dark:text-white md:text-8xl sm:text-7xl text-6xl text-ellipsis truncate flex lg:block md:block sm:block pb-4"
        >
            {key}
        </div>

        <div
            class="flex justify-between select-none dark:text-white lg:flex-row md:flex-row sm:flex-row flex-col"
        >
            <div
                class="flex gap-2 flex-row items-center overflow-x-auto max-w-full"
            >
                {#each stack as s}
                    <div
                        class="border border-neutral-200 rounded-full p-1 px-4 text-sm"
                    >
                        {s}
                    </div>
                {/each}
            </div>
            {#if !expandedSwitch}
                <div
                    class="italic font-thin text-sm sm:max-lg:mt-0 mt-2 hide-small"
                    in:blur|global={{ duration: 2400 }}
                    out:fly|global
                >
                    Click to Expand
                </div>
            {/if}
        </div>
        <!-- maybe but this between tag and click to expand and make click to expand text change with var-->

        {#if expandedSwitch}
            <div
                in:fly|global={{ duration: 2000, easing: cubicInOut }}
                out:fly|global={{ duration: 1200, easing: cubicInOut }}
            >
                <hr
                    class="border-t border-neutral-200 dark:border-neutral-800 my-6"
                />
                <div
                    class="cursor-text justify-start text-neutral-500 dark:text-neutral-400"
                >
                    {description}
                </div>
                <!--<div class="border-b border-neutral-100"></div>-->
                <div
                    class="flex flex-row lg:gap-6 md:gap-6 sm:gap-4 gap-2 mt-2"
                >
                    {#if links}
                        {#each links as link}
                            <a
                                href={link.url}
                                aria-label="Link to {link.name}"
                                class="items-center flex hover:text-rose-600 cursor-ne-resize dark:text-white select-none transition ease-in duration-500"
                                ><div>{link.name}</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-arrow-wave-right-up h-10 w-10"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    stroke-width="0.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M17 10h4v4" />
                                    <path
                                        d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2"
                                    />
                                </svg></a
                            >
                        {/each}
                    {/if}
                </div>
                <div
                    class="italic font-thin text-sm flex justify-end select-none mt-2 hide-small"
                    in:blur|global={{ duration: 2400 }}
                    out:fly|global
                >
                    Click to Close
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    @media only screen and (max-width: 640px) {
        .hide-small {
            display: None;
        }
    }
</style>
