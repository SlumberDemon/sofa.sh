<script>
  import { page } from "$app/stores";
  import Dot from "../components/dot.svelte";
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

<Dot />
