<script>
  import { onMount } from "svelte";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  onMount(() => {
    document.getElementById("name").onmouseover = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        // if (iterations >= 9) {event.target.innerText = Math.random() < 0.5 ? "SOFA" : "ソファ"; clearInterval(interval);}
        if (iterations >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iterations += 1 / 6;
      }, 40);
    };
  });
</script>

<div
  class="text-rose-600 text-6xl font-rampart dark:text-glow-red"
  id="name"
  data-value="ソファ"
>
  ソファ
</div>
