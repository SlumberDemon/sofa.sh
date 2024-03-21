<script>
  import { onMount } from "svelte";

  let user = {};

  onMount(async () => {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/549563196579774465`
    );
    user = await res.json();
  });

  let iSwitch;

  function showI() {
    iSwitch = true;
  }

  function hideI() {
    iSwitch = false;
  }

  $: icoSwitch = iSwitch;
</script>

<!-- Bad solution but eh -->

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mouseover={showI} on:mouseleave={hideI} class="tooltip">
  <div class="tooltiptext capitalize drop-shadow-md">
    {user.data?.discord_status}
  </div>
  {#if user.data?.discord_status == "online"}
    <div class="relative flex h-3 w-3">
      <div
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      />
      <div class="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
    </div>
  {:else if user.data?.discord_status == "idle"}
    <div class="relative flex h-3 w-3">
      <div
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"
      />
      <div class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
    </div>
  {:else if user.data?.discord_status == "dnd"}
    <div class="relative flex h-3 w-3">
      <div
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
      />
      <div class="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
    </div>
  {:else if user.data?.discord_status == "offline"}
    <div class="relative flex h-3 w-3">
      <div
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"
      />
      <div class="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
    </div>
  {:else}
    <div class="relative flex h-3 w-3">
      <div class="bg-neutral-300 animate-ping rounded-full w-full" />
    </div>
  {/if}
</div>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #404040;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #404040 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>
