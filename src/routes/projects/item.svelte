<script>
  export let name = "";
  export let html_url = "";
</script>

<div
  class="p-2 backdrop-blur-lg bg-gray-300 bg-opacity-0 rounded-md md:bg-opacity-5 border border-slate-500 dark:bg-slate-800"
>
  <div>
    <img
      src="https://opengraph.githubassets.com/a4bef9c1c2dd3b21d4c6ebed7fdc2cdcc3b5c1bd099df50f8e6efec7c231db4d/SlumberDemon/{name}"
      alt="img"
      class="rounded-md border-slate-300 border"
      class:animate-pulse={!name}
    />
  </div>
  <div
    class="flex flex-row justify-between items-center text-black dark:text-white"
  >
    <div
      class="font-sans my-1 mx-[0.1rem] text-ellipsis truncate"
      class:animate-pulse={!name}
    >
      {name || "Loading…"}
    </div>
    <div>
      <a href={html_url}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-external-link h-6 w-6 hover:scale-110 cursor-ne-resize"
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
            d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"
          />
          <line x1="10" y1="14" x2="20" y2="4" />
          <polyline points="15 4 20 4 20 9" />"
        </svg>
      </a>
    </div>
  </div>
</div>
