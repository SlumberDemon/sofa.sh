<script>
  export let repo = "";
  export let link = "";
  export let description = "";
  export let language = "";
</script>

<a
  href={link}
  class="p-2 rounded-md hover:bg-neutral-100 cursor-pointer transition ease-in duration-300 m-1 dark:hover:bg-neutral-900 select-none"
>
  <div class="justify-between flex flex-row my-1">
    <div
      class="text-1xl text-black dark:text-white"
      class:animate-pulse={!repo}
    >
      {repo || "Loading…"}
    </div>
    <div
      class="border rounded-md p-1 text-[10px] border-black items-center flex dark:border-white dark:text-white"
      class:animate-pulse={!repo}
    >
      {language || "Loading…"}
    </div>
  </div>
  <div class="text-neutral-500 text-[0.8rem]" class:animate-pulse={!repo}>
    {description || "Loading…"}
  </div>
</a>
