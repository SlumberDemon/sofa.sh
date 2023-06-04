<script>
  import Item from "./item.svelte";
  import { blur } from "svelte/transition";
  import ControlBar from "../../components/ControlBar.svelte";
  import ControlMode from "../../components/ControlMode.svelte";

  const reposLoad = fetch(
    "https://api.github.com/users/slumberdemon/repos"
  ).then((response) => {
    if (response.ok) return response.json();
    throw new Error(response.status);
  });

  const projects = [
    {
      name: "Surfer",
      image_url:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/2f069f0b-8c47-4115-aa1a-751cc905902a/icons/icon",
      url: "https://surfer.deta.dev",
    },
    {
      name: "SpaceShuttle",
      image_url:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/0b03c4de-9f4d-4053-9901-c5e9b1fb2262/icons/icon",
      url: "https://spaceshuttle.deta.dev/",
    },
    {
      name: "Palettes",
      image_url:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/169ea60d-b879-4e73-84d6-194ac12f823e/icons/icon",
      url: "https://palettes.deta.dev/demo",
    },
    {
      name: "ApiLab",
      image_url:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/d980d8a0-afab-49d2-b9a0-54aa105cd546/icons/icon",
      url: "https://deta.space/discovery/@sofa/apilab",
    },
    {
      name: "Wordle",
      image_url:
        "https://s3.eu-central-1.amazonaws.com/deta-app-icons.144798365827.eu-central-1/37fca2f3-65cb-4826-8d91-844fac1cc314/icons/icon",
      url: "https://deta.space/discovery/@sofa/wordle",
    },
    {
      name: "3D Wands",
      image_url:
        "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/899/13794423-pack_l.webp",
      url: "https://www.planetminecraft.com/texture-pack/3d-wands/",
    },
    {
      name: "Teda",
      image_url:
        "https://cdn.discordapp.com/avatars/845243066821902346/5333005a6c0574fd69358d8a5eae2408.png?size=1024",
      url: "https://top.gg/bot/845243066821902346",
    },
    {
      name: "B.O.A.T",
      image_url:
        "https://cdn.discordapp.com/avatars/823977552791339108/c59985e2c5787bfcae26a622c1e1b11b.png?size=1024",
      url: "https://top.gg/bot/823977552791339108",
    },
  ];
</script>

<!-- Control Mode -->

<ControlMode />

<!-- Page -->

<!-- Projects -->

<div class="font-sans text-5xl flex justify-center m-4 dark:text-white">
  Projects
</div>
<div in:blur class="grid grid-cols-2 md:grid-cols-4 m-2 gap-2">
  {#each projects as project}
    <a href={project["url"]} class="cursor-ne-resize">
      <div
        class="p-2 backdrop-blur-lg bg-gray-300 bg-opacity-0 rounded-md md:bg-opacity-5 border border-slate-500 flex-row flex items-center gap-1 drop-shadow-md dark:bg-slate-800"
      >
        <div>
          <img
            src={project["image_url"]}
            alt="img"
            class="rounded-md border-slate-300 border h-6 w-6"
          />
        </div>
        <div
          class="flex flex-row justify-between items-center text-black dark:text-white"
        >
          <div class="font-sans my-1 mx-[0.1rem] text-ellipsis truncate">
            {project["name"]}
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>

<!-- GitHub projects -->

<div class="font-sans text-5xl flex justify-center m-4 dark:text-white">
  GitHub
</div>
<div
  in:blur
  class="grid grid-cols-2 md:grid-cols-4 m-2 gap-2 mb-20 drop-shadow-md"
>
  <!-- gap-[0.1rem] -->
  {#await reposLoad}
    {#each Array(4).fill(null) as _}
      <Item />
    {/each}
  {:then repos}
    {#each repos as repo}
      <Item {...repo} />
    {/each}
  {:catch error}
    <pre>{error.stack}</pre>
  {/await}
</div>

<!-- Control Bar -->

<ControlBar page_name="Projects" page_for="/" page_back="about" />
