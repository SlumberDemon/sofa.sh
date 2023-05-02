<script>
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";
  import Repo from "../components/repo.svelte";

  const socials = [
    {
      label: "Email",
      url: "mailto:hi@sofa.sh",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/slumberdemon",
    },
    {
      label: "Github",
      url: "https://github.com/slumberdemon",
    },
    {
      label: "Old Site",
      url: "https://old.sofa.sh",
    },
  ];

  const reposLoad = fetch(
    "https://gh-pinned-repos.egoist.dev/?username=slumberdemon"
  ).then((response) => {
    if (response.ok) return response.json();
    throw new Error(response.status);
  });

  let mode = "";

  onMount(async () => {
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
  });

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

<div class="flex justify-center" in:blur={{ duration: 800 }}>
  <div class="lg:w-4/12 m-4">
    <!-- Dot -->
    <div class="flex">
      <div
        class="rounded-full border-rose-100 border-4 dark:border-rose-400 select-none dark:border-opacity-30"
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="bg-rose-600 rounded-full w-12 h-12 hover:scale-110 transition ease-in-out duration-500 cursor-pointer"
          on:click={modeSwitcher}
        />
      </div>
    </div>

    <!-- Main -->
    <div
      class="flex justify-between items-center my-12 mx-2 flex-col md:flex-row"
    >
      <!-- Text -->
      <div class="select-none">
        <div class="text-6xl text-black dark:text-white">Sofa</div>
        <div class="text-1xl text-neutral-500">@SlumberDemon</div>
      </div>

      <!-- Socials -->
      <div class="text-neutral-700 text-[0.8rem] dark:text-neutral-500">
        <div class="grid grid-cols-2 gap-2">
          {#each socials as social}
            <a
              href={social["url"]}
              class="items-center flex hover:text-black cursor-pointer dark:hover:text-white select-none"
              ><div>
                {social["label"]}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-wave-right-up h-10 w-10 transition ease-in duration-500 hover:text-rose-600"
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
              </svg></a
            >
          {/each}
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="grid grid-cols-2 gap-2">
      {#await reposLoad}
        {#each Array(6).fill(null) as _}
          <Repo />
        {/each}
      {:then repos}
        {#each repos as repo}
          <Repo {...repo} />
        {/each}
      {:catch error}
        <pre>{error.stack}</pre>
      {/await}
    </div>
  </div>
</div>
