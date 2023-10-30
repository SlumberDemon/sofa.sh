<script>
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  const socials = [
    {
      link: "mailto:hi@sofa.sh",
      icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-at h-8 w-8 hover:!stroke-rose-600 transition ease-in-out duration-500 dark:stroke-white"
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
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
    </svg>`,
    },
    {
      link: "https://x.com/slumberdemon",
      icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-x h-8 w-8 hover:!stroke-rose-600 transition ease-in-out duration-500 dark:stroke-white"
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
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>`,
    },
    {
      link: "https://github.com/slumberdemon",
      icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-github h-8 w-8 hover:!stroke-rose-600 transition ease-in-out duration-500 dark:stroke-white"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="0.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
      />
    </svg>`,
    },
    {
      link: "https://archive.sofa.sh",
      icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-box h-8 w-8 hover:!stroke-rose-600 transition ease-in-out duration-500 dark:stroke-white"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="0.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-8 -4.5" />
    </svg>`,
    },
  ];
</script>

<div
  class="flex flex-row gap-2"
  in:slide={{ duration: 300, easing: sineInOut }}
>
  {#each socials as social}
    <a href={social.link}>
      {@html social.icon}
    </a>
  {/each}
</div>
