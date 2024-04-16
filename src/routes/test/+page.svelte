<!--
<script lang="ts">
  import { Command } from "cmdk-sv";
</script>

<Command.Root label="Command Menu">
  <Command.Input />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>

    <Command.Group heading="Letters">
      <Command.Item>a</Command.Item>
      <Command.Item>b</Command.Item>
      <Command.Separator />
      <Command.Item>c</Command.Item>
    </Command.Group>

    <Command.Item>Apple</Command.Item>
  </Command.List>
</Command.Root>
-->

<!-- reinstall the cmdk lib and update svelte to use it-->

<!--https://github.com/huntabyte/cmdk-sv-->

<script>
  import { Command } from "cmdk-sv";

  let open = true;
  let value;
</script>

<svelte:window
  on:keydown={(e) => {
    if (e.metaKey && e.key == "k") {
      open = !open;
    }
    if (e.key == "Escape") {
      open = false;
    }
  }}
  on:pointerdown={() => (open = false)}
/>

<Command.Dialog label="Command Menu" bind:value bind:open>
  <Command.Input />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>

    <Command.Group heading="Letters">
      <Command.Item>a</Command.Item>
      <Command.Item>b</Command.Item>
      <Command.Separator />
      <Command.Item>c</Command.Item>
    </Command.Group>

    <Command.Item>Apple</Command.Item>
  </Command.List>
</Command.Dialog>
