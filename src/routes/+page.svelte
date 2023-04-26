<script>
  import { slide } from "svelte/transition";
  import ControlAuto from "../components/ControlAuto.svelte";
</script>

<!-- Control Auto -->

<ControlAuto />

<div
  class="items-center flex h-screen mx-8 whitespace-normal"
  in:slide={{ delay: 350, duration: 1500, axis: "x" }}
>
  <div class="flex-col">
    <p
      class="font-times text-5xl md:text-8xl break-words sm:text-7xl dark:text-white"
    >
      SlumberDemon
    </p>
    <div class="font-sans text-3xl md:text-5xl text-slate-500 sm:text-4xl">
      @<a
        href="about"
        class="text-slate-600 underline decoration-wavy underline-offset-8"
      >
        Sofa
      </a>
      <!-- underline underline-offset-[3px] hover:bg-[url('static/squiggle.svg')] hover:no-underline decoration-slate-500 cursor-e-resize-->
    </div>
  </div>
</div>

<!-- Footer -->

<div class="flex flex-col items-center justify-center text-center">
  <div
    class="text-sans text-slate-300 border-t border-slate-300 border-dashed items-center py-2 flex flex-col"
  >
    <div class="text-1xl">
      Made with SvelteKit & TailwindCSS (<a
        class="text-slate-400"
        href="https://github.com/slumberdemon/sofa.dev">view source</a
      >).
    </div>
    <div class="text-[1rem]">
      Reach out to me at <a
        href="mailto:hi@sofa.sh"
        class="text-slate-400 underline">hi[at]sofa(dot)sh</a
      >
    </div>
  </div>
  <!--
  <div class="text-slate-300 text-[1rem] m-2">
    <a href="/legal-disclosure" class="text-slate-200">Legal Disclosure</a> /
    <a href="/privacy-policy" class="text-slate-200">Privacy Policy</a>
  </div>
  -->
</div>
