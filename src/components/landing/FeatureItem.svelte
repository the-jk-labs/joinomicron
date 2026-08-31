<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    lines: [string, string];
    children: Snippet;
  }

  let { title, lines, children }: Props = $props();
</script>

<div class="flex flex-col items-start">
  <span class="inline-flex">
    {@render children()}
  </span>
  <h3
    class="mt-3 text-[17px] font-semibold tracking-tight text-[#101418] dark:text-[#eef0f3]"
  >
    {title}
  </h3>
  <p class="mt-1.5 text-[15px] leading-[1.4] text-[#3a4048] dark:text-[#a9b2bd]">
    {lines[0]}<br />{lines[1]}
  </p>
</div>
