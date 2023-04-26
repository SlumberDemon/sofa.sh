<script>
  import { page } from "$app/stores";
  import ControlAuto from "../components/ControlAuto.svelte";
</script>

<!-- Control Auto -->

<ControlAuto />

<!-- Page -->

<div
  class="m-6 flex h-screen w-screen flex-wrap items-center scroll-smooth justify-center flex-col text-center overflow-hidden"
>
  <div class="text-black text-6xl font-sans dark:text-white">
    {$page.status} | {$page.error.message}
  </div>
  <div class="hover:scale-110 dark:text-white">
    <a href="/" class="cursor-w-resize">
      <div />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-narrow-left"
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
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="9" y2="16" />
        <line x1="5" y1="12" x2="9" y2="8" />
      </svg>
    </a>
  </div>
  <div />
</div>
