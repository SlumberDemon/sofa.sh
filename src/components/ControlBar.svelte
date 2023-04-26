<script>
  export let page_name = "";
  export let page_back = "";
  export let page_for = "";
</script>

<div
  class="fixed bottom-0 left-0 right-0 flex-row flex inset-x-0 m-2 backdrop-blur-lg bg-gray-300 bg-opacity-0 rounded-md md:bg-opacity-5 justify-between"
>
  <div class="m-2 font-times text-4xl dark:text-white">
    {page_name}
  </div>
  <div class="flex-row flex items-center">
    <div class="hover:scale-110 dark:text-white">
      <a href={page_back} class="cursor-w-resize">
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
    <div class="hover:scale-110 dark:text-white">
      <a href={page_for} class="cursor-e-resize">
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
    <div class="hover:scale-110 mx-4 dark:text-white">
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-home h-11 w-11"
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
          <polyline points="5 12 3 12 12 3 21 12 19 12" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </a>
    </div>
  </div>
</div>
