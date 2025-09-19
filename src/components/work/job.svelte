<script>
    export let dates = "";
    export let title = "";
    export let employer = "";
    export let type = "";
    export let website = "";
</script>

<div
    class="hover:bg-neutral-200 dark:hover:bg-neutral-800 border-b p-2 border-neutral-200 dark:border-neutral-800 dark:border-neutral-80 flex flex-row items-center justify-between"
>
    <div class="text-left">
        <div class="text-neutral-900 dark:text-white mb-2 font-medium text-2xl">
            {title}
        </div>
        <div class="underline decoration-2 underline-offset-4">
            <a
                class="flex-row flex items-center text-sm dark:text-neutral-400 transition ease-in duration-500 hover:text-rose-600 dark:hover:text-rose-600"
                href={website}
            >
                {employer}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-wave-right-up h-10 w-10"
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
    </div>
    <div class="text-right">
        <div class="text-neutral-800 dark:text-neutral-200 font-light text-xl">
            {dates}
        </div>
        <div class="text-neutral-400 dark:text-neutral-600 text-sm lowercase">
            {type}
        </div>
    </div>
</div>
