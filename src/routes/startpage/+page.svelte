<script>
  import { onMount } from "svelte";
  import ControlAuto from "../../components/ControlAuto.svelte";

  const links = [
    {
      label: "Space",
      url: "https://deta.space",
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
      label: "Twitter",
      url: "https://twitter.com",
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

  let currentDateTime = new Date();

  onMount(() => {
    mode = localStorage.theme;
    if (localStorage.theme === undefined || localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    localStorage.theme === "light";
    rfrshMode();

    const interval = setInterval(() => {
      currentDateTime = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  function getWeekDay(c) {
    let daysList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysList[c.getDay()];
  }
  function getMonth(c) {
    let monthsList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthsList[c.getMonth()];
  }
  function getDate(c) {
    return c.getDate();
  }
  function getHour(c) {
    return c.getHours() % 12 || 12;
  }
  function getMinute(c) {
    return c.getMinutes() < 10 ? "0" + c.getMinutes() : c.getMinutes();
  }
  function getMeridiem(c) {
    return c.getHours() < 12 ? "AM" : "PM";
  }

  let mode;

  function modeSwitcher() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else if (localStorage.theme === "light" || undefined) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    rfrshMode();
  }

  function rfrshMode() {
    mode = localStorage.theme;
    window.location.reload;
  }
</script>

<ControlAuto />

<div class="flex justify-center items-center h-screen flex-col m-4 select-none">
  <div>
    <div class="flex flex-row justify-between items-center">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="text-black dark:text-white cursor-pointer"
        on:click={modeSwitcher}
      >
        <div class="relative">
          <img
            src="https://cdn.sofa.sh/a.png"
            alt="icon"
            class="rounded-md drop-shadow-md w-20 h-20 blur-2xl hover:blur-none transition ease-in-out duration-500 cursor-pointer"
          />
          <div
            class="rounded-full absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1"
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
          {getWeekDay(currentDateTime).substr(0, 3)}
          {getMonth(currentDateTime).substr(0, 3)}
          {getDate(currentDateTime)}
        </div>
        <div class="text-xl font-thin">
          {getHour(currentDateTime)}:{getMinute(currentDateTime)}
          {getMeridiem(currentDateTime)}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 my-4">
      {#each links as link}
        <a
          href={link.url}
          class="hover:scale-110 transition ease-in-out duration-500 cursor-pointer border text-center p-2 rounded-md border-black dark:border-white drop-shadow-md dark:text-white"
        >
          {link.label}
        </a>
      {/each}
    </div>
  </div>
  <!--https://duckduckgo.com/?q={query}-->
  <!--
  <input
    class="border border-black rounded-md p-1 text-center w-fit"
    placeholder="Search"
  />
  -->
</div>
