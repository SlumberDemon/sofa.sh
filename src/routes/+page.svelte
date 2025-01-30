<script>
    import Link from "../components/link.svelte";
    import Dot from "../components/mode.svelte";
    import Icon from "../components/icon.svelte";
    import Barcode from "../components/bottom/barcode.svelte";
    import Socials from "../components/bottom/socials.svelte";

    import { assets } from "$app/paths";

    let toggle;

    $: socialState = toggle;
</script>

<svelte:head>
    <title>Sofa</title>

    <meta property="og:image" content="{assets}/banner.png" />
</svelte:head>

<div
    class="flex justify-center items-center h-screen flex-col m-4 lg:fixed md:fixed"
>
    <div class="lg:w-4/12 md:w-2/4 sm:w-1/2 xl:w-4/12 2xl:w-4/12">
        <div class="flex flex-row items-center">
            <Icon />
            <div class="text-rose-600 text-6xl font-rampart dark:text-glow-red">
                ソファ
            </div>
        </div>
        <div
            class="font-sans font-[300] 2xl:text-2xl text-left text-neutral-500 dark:text-neutral-400 mt-2 text-lg"
        >
            Passionate about the seamless blend of artistry and software.
            Currently at
            <Link url="https://deta.surf" label="deta" />, shaping Surf and
            improving my own craft. <!--Also in the process of learning Japanese.-->
            Discover more about me on my
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                on:click={() => (toggle = true)}
                role="button"
                tabindex="0"
                class="cursor-pointer dark:text-white text-black hover:!text-rose-600 transition ease-in-out duration-500"
                >socials</span
            >
            or explore my
            <Link url="projects" label="favourite projects" />. Feel free to
            <Link url="mailto:hi@sofa.sh" label="contact" />
            me.
        </div>
    </div>
</div>

<div class="fixed bottom-0 flex justify-between items-center w-full p-2">
    <Dot />
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex flex-row gap-2 items-center">
        <!-- <Status />-->
        <!-- svelte-ignore a11y-role-has-required-aria-props -->
        <div
            on:mouseover={() => (toggle = true)}
            on:mouseleave={() => (toggle = false)}
        >
            {#if socialState}
                <Socials />
            {:else}
                <Barcode />
            {/if}
        </div>
    </div>
</div>
