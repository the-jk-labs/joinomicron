<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    lines: [string, string];
    children: Snippet;
  }

  let { title, lines, children }: Props = $props();
</script>

<div class="flex flex-col items-center text-center sm:block sm:text-left">
  <span class="inline-flex shrink-0">
    {@render children()}
  </span>
  <h3
    class="mt-2 text-[15px] font-semibold tracking-tight text-[#101418] sm:mt-3 sm:text-[17px] dark:text-[#eef0f3]"
  >
    {title}
  </h3>
  <p
    class="mt-1 text-[13px] leading-[1.45] text-[#3a4048] sm:mt-1.5 sm:text-[15px] dark:text-[#a9b2bd]"
  >
    {lines[0]}{" "}
    <br class="hidden sm:block" />
    {lines[1]}
  </p>
</div>
