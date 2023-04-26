<script>
  import { blur } from "svelte/transition";
  import ControlBar from "../../components/ControlBar.svelte";
  import ControlMode from "../../components/ControlMode.svelte";
</script>

<!-- Control Mode -->

<ControlMode />

<!-- Page -->

<div
  class="flex justify-center m-2 items-center h-screen flex-col dark:text-white text-black"
  in:blur
>
  <img
    src="https://avatars.githubusercontent.com/u/72651859?v=4"
    alt="profile"
    class="rounded-full h-28 w-28"
  />
  <div class="my-2">
    <!-- GitHub -->
    <a
      href="https://github.com/SlumberDemon"
      class="border rounded-md flex-row flex items-center px-2 m-1 justify-center hover:scale-110 cursor-ne-resize"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-github h-5 w-5 mx-1"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        />
      </svg>
      <div>GitHub</div>
    </a>

    <!-- Dribble -->

    <a
      href="https://dribbble.com/SlumberDemon"
      class="border rounded-md flex-row flex items-center px-2 m-1 justify-center hover:scale-110 cursor-ne-resize"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-dribbble h-5 w-5 mx-1"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
        <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
        <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
      </svg>
      <div>Dribble</div>
    </a>

    <!-- Bricklink -->

    <a
      href="https://www.bricklink.com/v3/studio/public_gallery.page?idUser=1801453"
      class="border rounded-md flex-row flex items-center px-2 m-1 justify-center hover:scale-110 cursor-ne-resize"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-lego h-5 w-5 mx-1"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="9.5" y1="11" x2="9.51" y2="11" />
        <line x1="14.5" y1="11" x2="14.51" y2="11" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        <path
          d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"
        />
      </svg>
      <div>Bricklink</div>
    </a>

    <!-- Planet Minecraft -->

    <a
      href="https://www.planetminecraft.com/member/slumberdemon"
      class="border rounded-md flex-row flex items-center px-2 m-1 justify-center hover:scale-110 cursor-ne-resize"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-planet h-5 w-5 mx-1"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805"
        />
        <circle cx="12" cy="12" r="7" />
      </svg>
      <div>Planet Mincraft</div>
    </a>
  </div>
</div>

<!-- Control Bar -->

<ControlBar page_name="Links" page_for="/" page_back="projects" />
