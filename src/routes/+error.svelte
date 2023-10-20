<script>
  import { page } from "$app/stores";
  import ControlAuto from "../components/ControlAuto.svelte";
</script>

<!-- Control Auto -->

<ControlAuto />

<!-- Page -->

<div
  class="flex h-screen w-screen flex-wrap items-center scroll-smooth justify-center flex-col text-center overflow-hidden"
>
  <div class="font-rampart text-6xl text-rose-600">
    {$page.status}
  </div>
  <div class="text-black text-4xl dark:text-white font-sans mt-1">
    {$page.error.message}
  </div>
</div>

<div class="fixed bottom-0 left-0 m-2">
  <a class="flex" href="/">
    <div
      class="rounded-full border-rose-100 border-4 dark:border-rose-400 select-none dark:border-opacity-30"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="bg-rose-600 rounded-full w-12 h-12 hover:scale-110 transition ease-in-out duration-500 cursor-pointer"
      />
    </div>
  </a>
</div>
