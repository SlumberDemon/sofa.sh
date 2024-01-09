<script>
  import { onMount } from "svelte";

  onMount(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  });
</script>

<div id="blob" class="hidden lg:block md:block sm:hidden" />
<div id="blur" />

<style>
  #blob {
    background: linear-gradient(to right, #be123c, #e11d48);
    animation: rotate 20s infinite;
    background-color: white;
    translate: -50% -50%;
    border-radius: 50%;
    position: absolute;
    aspect-ratio: 1;
    height: 500px;
    z-index: -2;
    left: 50%;
    top: 50%;
  }

  #blur {
    backdrop-filter: blur(200px);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
  }
</style>
