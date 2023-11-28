<script>
  import ControlMode from "../../components/ControlMode.svelte";
  import { blur } from "svelte/transition";
</script>

<!-- Control Mode -->

<ControlMode />

<!-- Page -->

<div class="flex justify-center items-center h-screen" in:blur>
  <div class="flex gap-6 md:flex-row flex-col m-2">
    <div class="flex md:flex-row gap-6 flex-col">
      <div class="flex flex-col justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/72651859?v=4"
          alt="Product_Image_0"
          class="border-black border dark:border-white scale-75 md:scale-100"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 justify-center scale-75 md:scale-100">
      <div class="border-b-2 border-black py-2 dark:border-white">
        <div class="font-times text-5xl text-black dark:text-white">
          Palatial Elegance Sofa
        </div>
        <div class="flex flex-row gap-2">
          <div
            class="font-sans text-2xl text-rose-500 dark:text-rose-300 line-through"
          >
            $300
          </div>
          <div class="font-sans text-2xl text-slate-500 dark:text-slate-300">
            $250
          </div>
        </div>
      </div>
      <a href="https://www.youtube.com/watch?v=yXQViqx6GMY">
        <div
          class="border-black bg-black p-2 flex-row flex justify-between items-center text-white dark:text-black dark:border-white dark:bg-white hover:scale-105 transition-transform cursor-pointer duration-700 ease-in-out"
        >
          <div class="font-times text-3xl">Acquire</div>
          <div class="justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-receipt-2 h-8 w-8"
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
                d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
              />
              <path
                d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<!-- Footer -->

<div class="flex flex-col items-center justify-center">
  <div
    class="text-sans text-slate-300 border-t border-slate-300 border-dashed items-center py-2 flex flex-col"
  >
    <div class="text-1xl">
      DISCLAIMER: This is a joke and will not let you to buy anything!
    </div>
  </div>
</div>
