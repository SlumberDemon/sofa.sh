<script>
  import { onMount } from "svelte";
  import Barcode from "../components/bottom/barcode.svelte";
  import Socials from "../components/bottom/socials.svelte";

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

<div class="flex justify-center items-center h-screen flex-col m-4">
  <div class="text-rose-600 text-6xl font-rampart dark:text-glow-red">
    ソファ
  </div>
  <div class="flex flex-row mt-4 cursor-pointer dark:text-white">
    <div>Projects</div>
    <div class="cursor-default">⬩</div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={showI}>Socials</div>
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
