<script>
  function modeSwitcher() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else if (localStorage.theme === "light" || undefined) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
</script>

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
