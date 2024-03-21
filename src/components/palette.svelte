<script>
  import { blur } from "svelte/transition";
  let palSwitch = false;

  const options = [
    {
      category: "themes",
      items: [
        {
          title: "Change theme to dark",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars h-6 w-6" width="60" height="60" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
  <path d="M19 11h2m-1 -1v2" />
</svg>`,
          action: () => {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            palSwitch = false;
          },
        },
        {
          title: "Change theme to light",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun h-6 w-6" width="60" height="60" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>`,
          action: () => {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            palSwitch = false;
          },
        },
      ],
    },
  ];

  let is_meta_down = false;
  let is_k_down = false;

  function exitPal() {
    palSwitch = false;
    is_meta_down = false;
    is_k_down = false;
  }

  function openPal(event) {
    if (event.repeat) return;

    switch (event.key) {
      case "Control":
        is_meta_down = true;

        event.preventDefault();
        break;

      case "k":
        is_k_down = true;

        event.preventDefault();
        break;
    }
    if (is_meta_down && is_k_down) {
      palSwitch = true;
    }
  }

  function closePal(event) {
    switch (event.key) {
      case "Escape":
        exitPal();
        break;

      case "Control":
        is_meta_down = false;

        event.preventDefault();
        break;

      case "h":
        is_k_down = false;

        event.preventDefault();
        break;
    }
  }

  $: palState = palSwitch;
</script>

<svelte:window on:keydown={openPal} on:keyup={closePal} />

{#if palState}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed inset-0 dark:bg-black opacity-50 z-20 bg-white"
    on:click={exitPal}
    in:blur|global={{ duration: 200 }}
    out:blur|global={{ duration: 200 }}
  />
  <div
    class="absolute inset-0 flex justify-center items-center"
    in:blur|global={{ duration: 100 }}
    out:blur|global={{ duration: 100 }}
  >
    <div class="z-30">
      <div
        class="bg-zinc-50 rounded-md drop-shadow-md border bg-opacity-80 backdrop-blur-md dark:bg-[#090909] dark:border-[#262626]"
      >
        <!-- svelte-ignore a11y-autofocus -->
        <input
          placeholder="Search..."
          class="p-4 focus:ring-0 outline-none bg-transparent border-b border-black/10 dark:border-[#262626] w-[35rem] dark:text-white"
          id="typing"
          autofocus
        />
        <div class="p-2">
          <div>
            {#each options as category, index}
              <div class="text-xs text-zinc-400 dark:text-zinc-500 capitalize">
                {category.category}
              </div>
              <div class="mt-1">
                {#each options[index].items as item}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <div
                    class="flex flex-row items-center gap-2 hover:bg-neutral-200 text-zinc-500 dark:text-zinc-400 hover:text-black p-[0.65rem] rounded-xl cursor-pointer hover:dark:bg-[#161616] hover:dark:text-white"
                    on:click={item.action}
                  >
                    {@html item.icon}

                    <div class="text-base">{item.title}</div>
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
