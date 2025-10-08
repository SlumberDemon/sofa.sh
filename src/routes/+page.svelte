<script>
    import Link from "../components/link.svelte";
    import Dot from "../components/mode.svelte";
    import Icon from "../components/icon.svelte";
    import Barcode from "../components/bottom/barcode.svelte";
    import Socials from "../components/bottom/socials.svelte";

    import { assets } from "$app/paths";

    let toggle = $state();
</script>

<svelte:head>
    <title>Sofa</title>

    <meta property="og:image" content="{assets}/banner.png" />
</svelte:head>

<div
    class="flex justify-center items-center h-screen flex-col m-4 lg:fixed md:fixed"
>
    <div class="md:w-2/4 sm:w-1/2 lg:w-4/12">
        <div class="flex flex-row items-center">
            <Icon />
            <div class="text-rose-600 text-6xl font-rampart dark:text-glow-red">
                ソファ
            </div>
        </div>
        <div
            class="font-light 2xl:text-2xl text-left text-neutral-500 dark:text-neutral-400 mt-2 text-lg"
        >
            Passionate about the seamless blend of artistry and software.
            Previously at
            <Link url="work" label="deta" />. Learn more about me on my
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <span
                onclick={() => (toggle = true)}
                role="button"
                tabindex="0"
                class="cursor-pointer dark:text-white text-black hover:!text-rose-600 transition ease-in-out duration-500"
                >socials</span
            >, explore my
            <Link url="projects" label="favourite projects" /> or discover <Link
                url="design"
                label="some
                of designs"
            />. Feel free to
            <Link url="mailto:hi@sofa.sh" label="contact" />
            me.
        </div>
    </div>
</div>

<div class="fixed bottom-0 flex justify-between items-center w-full p-2">
    <Dot />
    <div class="flex flex-row gap-2 items-center">
        <!-- <Status />-->
        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
        <div
            role="none"
            onmouseover={() => (toggle = true)}
            onmouseleave={() => (toggle = false)}
        >
            {#if toggle}
                <Socials />
            {:else}
                <Barcode />
            {/if}
        </div>
    </div>
</div>
