<script>
  import { onMount } from "svelte";

  let mode = "";

  onMount(async () => {
    mode = localStorage.theme;
    if (localStorage.theme === undefined) {
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    localStorage.theme === "light";
    rfrshMode();
  });

  function rfrshMode() {
    mode = localStorage.theme;
    window.location.reload;
  }
</script>
