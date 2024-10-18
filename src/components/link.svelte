<script>
    export let label;
    export let url;
</script>

<a
    href={url}
    class="dark:text-white text-black hover:!text-rose-600 transition ease-in-out duration-500"
    aria-label={label}
    >{label}
</a>
