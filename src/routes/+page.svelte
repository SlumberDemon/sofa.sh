<script>
    import Link from "../components/link.svelte";
    import Dot from "../components/mode.svelte";
    import Icon from "../components/icon.svelte";
    import Socials from "../components/bottom/socials.svelte";

    import { assets } from "$app/paths";
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
            <Link url="work" label="deta" />. Learn more about me on my socials,
            explore my
            <Link url="projects" label="favourite projects" /> or discover some of
            my <Link url="design" label="designs" />. Feel free to
            <Link url="mailto:hi@sofa.sh" label="contact" />
            me.
        </div>
    </div>
</div>

<div class="fixed bottom-0 flex justify-between items-center w-full p-2">
    <Dot />
    <Socials />
</div>
