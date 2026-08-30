<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    lines: [string, string];
    children: Snippet;
  }

  let { title, lines, children }: Props = $props();
</script>

<div class="flex flex-col items-start gap-2">
  <span class="inline-flex">
    {@render children()}
  </span>
  <h3 class="text-base font-semibold tracking-tight text-[#101418]">
    {title}
  </h3>
  <p class="text-[15px] leading-snug text-[#3f4650]">
    {lines[0]}<br />{lines[1]}
  </p>
</div>
