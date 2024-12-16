<script>
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
</script>

<div in:slide|global={{ duration: 300, easing: sineInOut }}>
  <div class="font-libre text-2xl dark:text-white">slumberdemon</div>
</div>
