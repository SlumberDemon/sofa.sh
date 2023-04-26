<script>
  import { onMount } from "svelte";

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

  const projects = [
    {
      name: "Surfer",
      description: "Your personal search engine",
      image:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/2f069f0b-8c47-4115-aa1a-751cc905902a/icons/icon",
      url: "https://surfer.deta.dev",
    },
    {
      name: "SpaceShuttle",
      description: "Your personal image cloud",
      image:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/0b03c4de-9f4d-4053-9901-c5e9b1fb2262/icons/icon",
      url: "https://spaceshuttle.deta.dev/",
    },
    {
      name: "Palettes",
      description: "Color creativity",
      image:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/169ea60d-b879-4e73-84d6-194ac12f823e/icons/icon",
      url: "https://palettes.deta.dev/demo",
    },
    {
      name: "B.O.A.T",
      description: "The general purpose bot",
      image:
        "https://cdn.discordapp.com/avatars/823977552791339108/c59985e2c5787bfcae26a622c1e1b11b.png?size=1024",
      url: "https://top.gg/bot/823977552791339108",
    },
    {
      name: "Teda",
      description: "The curious Ai Chatbot with a fun personality",
      image:
        "https://cdn.discordapp.com/avatars/845243066821902346/5333005a6c0574fd69358d8a5eae2408.png?size=1024",
      url: "https://top.gg/bot/845243066821902346",
    },
    {
      name: "3D Wands",
      description: "Minecraft texture pack for optifine",
      image:
        "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/899/13794423-pack_l.webp",
      url: "https://www.planetminecraft.com/texture-pack/3d-wands/",
    },
  ];

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

<div class="flex justify-center">
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
      {#each projects as project}
        <a
          href={project["url"]}
          class="p-2 rounded-md hover:bg-neutral-100 cursor-pointer transition ease-in duration-300 m-1 dark:hover:bg-neutral-900 select-none"
        >
          <div class="text-1xl text-black dark:text-white">
            {project["name"]}
          </div>
          <div class="text-neutral-500 text-[0.8rem]">
            {project["description"]}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
