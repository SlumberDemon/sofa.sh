<script>
  import { onMount } from "svelte";
  import { assets } from "$app/paths";

  const links = [
    {
      label: "Claude",
      url: "https://claude.ai",
    },
    {
      label: "Github",
      url: "https://github.com",
    },
    {
      label: "Youtube",
      url: "https://youtube.com",
    },
    {
      label: "Spotify",
      url: "https://spotify.com",
    },
    {
      label: "Reddit",
      url: "https://reddit.com",
    },
    {
      label: "Bluesky",
      url: "https://bsky.app/",
    },
    {
      label: "Instagram",
      url: "https://instagram.com",
    },
    {
      label: "Discord",
      url: "https://discord.com",
    },
  ];

  let query;

  let currentDateTime = new Date();

  onMount(() => {
    const interval = setInterval(() => {
      currentDateTime = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentMode;

  function modeSwitcher() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      currentMode = "light";
    } else if (localStorage.theme === "light" || undefined) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      currentMode = "dark";
    }
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute(
        "content",
        localStorage.theme === "light" ? "#ffffff" : "#000000"
      );
  }

  $: mode = currentMode;
</script>

<svelte:head>
  <title>Startpage</title>
</svelte:head>

<div class="flex justify-center items-center h-screen flex-col m-4 select-none">
  <div>
    <div class="flex flex-row justify-between items-center">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="text-black dark:text-white cursor-pointer"
        on:click={modeSwitcher}
        role="button"
        tabindex="0"
      >
        <div class="relative">
          <img
            src="{assets}/pfp.png"
            alt="icon"
            class="rounded-md drop-shadow-md w-20 h-20 blur-2xl hover:blur-none transition ease-in-out duration-500 cursor-pointer my-2"
          />
          <div
            class="rounded-full absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 hover:scale-110 transition ease-in-out duration-500"
          >
            {#if mode == "dark"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-sun h-12 w-12"
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
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path
                  d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
                />
              </svg>
            {:else}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-moon-stars h-12 w-12"
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
                <path
                  d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                />
                <path
                  d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
                />
                <path d="M19 11h2m-1 -1v2" />
              </svg>{/if}
          </div>
        </div>
      </div>

      <div class="text-right dark:text-white">
        <div class="text-3xl">
          {days[currentDateTime.getDay()]}
          {months[currentDateTime.getMonth()]}
          {currentDateTime.getDate()}
        </div>
        <div class="text-xl font-thin">
          {currentDateTime.getHours() % 12 ||
            12}:{currentDateTime.getMinutes() < 10
            ? "0" + currentDateTime.getMinutes()
            : currentDateTime.getMinutes()}:{currentDateTime.getSeconds() < 10
            ? "0" + currentDateTime.getSeconds()
            : currentDateTime.getSeconds()}
          {currentDateTime.getHours() < 12 ? "AM" : "PM"}
        </div>
      </div>
    </div>
    <form on:submit={(location.href = `https://duckduckgo.com/?q=${query}`)}>
      <input
        class="border border-black rounded-md p-1 text-center outline-none min-w-full max-w-full bg-transparent dark:border-white dark:text-white placeholder:font-thin placeholder:text-neutral-500 placeholder:dark:text-neutral-400 placeholder:italic focus:scale-105 transition ease-in-out duration-500"
        placeholder="Search..."
        autocomplete="off"
        spellcheck="false"
        bind:value={query}
      />
    </form>
    <div class="grid lg:grid-cols-4 gap-4 my-4 grid-cols-2 md:grid-cols-4">
      {#each links as link}
        <a
          href={link.url}
          aria-label="Link to {link.label}"
          class="hover:scale-110 transition ease-in-out duration-500 cursor-pointer border text-center p-2 rounded-md border-black dark:border-white drop-shadow-md dark:text-white"
        >
          {link.label}
        </a>
      {/each}
    </div>
  </div>
</div>

<!-- add cmdK thingy -->
