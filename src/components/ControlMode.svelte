<script>
  import { onMount } from "svelte";

  let mode = "";

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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="flex flex-row m-1 justify-end fixed top-0 right-0 dark:text-white text-black cursor-pointer"
  on:click={modeSwitcher}
>
  {#if mode === "dark"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sun h-11 w-11"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path
        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-moon-stars h-11 w-11"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
      />
      <path
        d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
      />
      <path d="M19 11h2m-1 -1v2" />
    </svg>
  {/if}
</div>
