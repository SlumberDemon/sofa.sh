<script>
  import { onMount } from "svelte";
  import Link from "./projects/link.svelte";
  import Barcode from "../components/bottom/barcode.svelte";
  import Socials from "../components/bottom/socials.svelte";
  import Icon from "../components/icon.svelte";

  let mode;
  let iSwitch;

  onMount(async () => {
    mode = localStorage.theme;
    if (localStorage.theme === undefined || localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    localStorage.theme === "light";
    rfrshMode();
  });

  function modeSwitcher() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else if (localStorage.theme === "light" || undefined) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    rfrshMode();
  }

  function rfrshMode() {
    mode = localStorage.theme;
    window.location.reload;
  }

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
      <!--<img
        src="https://cdn.sofa.sh/pfp.png"
        alt="sofa"
        class="h-16 w-16 grayscale rounded-xl drop-shadow-md hover:grayscale-0 transition ease-in-out duration-500 select-none"
      />-->
      <a
        href="https://www.transhumans.xyz/images/astro"
        class="hover:scale-110 transition ease-in-out duration-500 hover:drop-shadow-md"
      >
        <Icon />
      </a>
      <div class="text-rose-600 text-6xl font-rampart dark:text-glow-red">
        ソファ
      </div>
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
  <div class="flex">
    <div
      class="rounded-full border-rose-100 border-4 dark:border-rose-400 select-none dark:border-opacity-30"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="bg-rose-600 rounded-full w-12 h-12 hover:scale-110 transition ease-in-out duration-500 cursor-pointer"
        on:click={modeSwitcher}
      />
    </div>
  </div>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div on:mouseover={showI} on:mouseleave={hideI}>
    {#if icoSwitch}
      <Socials />
    {:else}
      <Barcode />
    {/if}
  </div>
</div>

<!--
<style>
  .text-flow {
    margin: 0;
    padding: 0;
    font-size: 120px;
    text-transform: uppercase;
    position: relative;
    color: #000000;
  }

  .text-flow:before {
    content: "Sofa";
    position: absolute;
    color: #ffffff;
    background-color: #e11d48;
    top: 0;
    left: 0;
    width: 0%;
    overflow: hidden;
    transition: all 0.5s;
  }

  .text-flow:hover:before {
    width: 100%;
  }
  .fill-right {
    display: inline;
    text-decoration: none;
    -webkit-user-select: none
}
</style>
-->
