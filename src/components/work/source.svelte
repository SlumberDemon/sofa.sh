<script>
    export let name = "";
    export let website = "";
    export let description = "";
</script>

<div
    class="group border-b p-2 border-neutral-200 hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800"
>
    <a href={website} class="flex justify-between items-center">
        <div>
            <div class="text-xl dark:text-neutral-300">{name}</div>
            <div class="text-sm dark:text-neutral-400 text-neutral-500">
                {description}
            </div>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-wave-right-up h-10 w-10 group-hover:text-rose-600 transition ease-in duration-500 flex-shrink-0 ml-40 dark:text-neutral-300"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 10h4v4" />
            <path
                d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2"
            />
        </svg>
    </a>
</div>
