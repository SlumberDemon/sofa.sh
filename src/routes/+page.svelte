<script>
  import Dot from "../components/dot.svelte";
  import Link from "./projects/link.svelte";
  import Icon from "../components/icon.svelte";
  import Name from "../components/name.svelte";
  import Barcode from "../components/bottom/barcode.svelte";
  import Socials from "../components/bottom/socials.svelte";

  let iSwitch;

  function showI() {
    iSwitch = true;
  }

  function hideI() {
    iSwitch = false;
  }

  $: icoSwitch = iSwitch;
</script>

<svelte:head>
  <title>Sofa</title>
</svelte:head>

<div
  class="flex justify-center items-center h-screen flex-col m-4 lg:fixed md:fixed"
>
  <div class="lg:w-4/12 md:w-2/4 sm:w-1/2 xl:w-4/12 2xl:w-4/12">
    <div class="flex flex-row items-center">
      <a
        href="https://www.transhumans.xyz/images/astro"
        class="hover:scale-110 transition ease-in-out duration-500 hover:drop-shadow-md"
      >
        <Icon />
      </a>
      <Name />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="font-sans font-thin mt-2 2xl:text-2xl text-left text-neutral-500 dark:text-neutral-400"
    >
      Passionate about the seamless blend of artistry and software. Currently at <Link
        url="https://deta.space"
        label="deta"
      />, shaping SpaceOS and improving my own craft. <!--Also in the process of learning Japanese.-->
      Discover more about me on my
      <span
        on:click={showI}
        class="cursor-pointer dark:text-white text-black hover:!text-rose-600 transition ease-in-out duration-500"
        >socials</span
      >
      or explore my
      <Link url="/projects" label="projects" />. Feel free to
      <Link url="mailto:hi@sofa.sh" label="contact" />
      me.
    </div>
  </div>
</div>

<div class="fixed bottom-0 flex justify-between items-center w-full p-2">
  <Dot />
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div on:mouseover={showI} on:mouseleave={hideI}>
    {#if icoSwitch}
      <Socials />
    {:else}
      <Barcode />
    {/if}
  </div>
</div>
