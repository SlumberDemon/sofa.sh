<script>
  export let repo = "";
  export let link = "";
  export let description = "";
  export let stars = "";
</script>

<a
  class="bg-neutral-100 p-4 hover:-translate-y-1 transition ease-in-out duration-500 rounded-md"
  href={link}
>
  <div>
    {repo}
  </div>
  <div class="text-sm text-ellipsis truncate">
    {description}
  </div>
  <div class="m-1 text-sm flex-row flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sparkles h-8 w-8 fill-rose-600 stroke-rose-600"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="0.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
      />
    </svg>
    {stars}
  </div>
</a>
