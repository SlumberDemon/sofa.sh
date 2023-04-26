<script>
  import { blur } from "svelte/transition";
  import ControlMode from "../../components/ControlMode.svelte";
</script>

<div
  class="flex justify-center items-center h-screen text-black font-times m-6 scroll-smooth flex-wrap"
>
  <div class="flex-col md:flex-row flex my-2">
    <div class="inset-y-0 left-0 text-6xl md:text-left dark:text-white" in:blur>
      Hi my name is Sofa, I describe myself as a developer, artist and student
    </div>
    <div
      class="text-slate-300 font-sans inset-y-0 right-0 md:mb-20 mb-0 text-4xl md:text-right"
      in:blur
    >
      I work on a lot of open source projects, which can be found on my <a
        href="https://github.com/SlumberDemon"
        class="underline decoration-3 cursor-ne-resize text-slate-400">github</a
      > page
    </div>
  </div>
</div>

<!-- Control Mode -->

<ControlMode />

<!-- Control Bar -->

<div
  class="fixed bottom-0 left-0 right-0 flex-row flex inset-x-0 m-2 md:justify-end backdrop-blur-lg bg-gray-300 bg-opacity-0 rounded-md md:bg-opacity-5 dark:text-white"
>
  <div class="hover:scale-110">
    <a href="/" class="cursor-w-resize">
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
  <div class="hover:scale-110">
    <a href="projects" class="cursor-e-resize">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-narrow-right"
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
        <line x1="15" y1="16" x2="19" y2="12" />
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    </a>
  </div>
</div>
