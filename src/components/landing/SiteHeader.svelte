<script lang="ts">
  import { Button } from "bits-ui";
  import ThemeToggle from "./ThemeToggle.svelte";

  const links = [
    { href: "#story", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
</script>

<header
  class="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-[#0d1016]/75"
>
  <div
    class="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-10"
  >
    <a href="/" class="inline-flex items-center gap-2.5">
      <img src="/logo.png" alt="Omicron" class="h-9 w-9" />
      <span
        class="text-[17px] font-semibold tracking-tight text-[#101418] dark:text-[#f0f0eb]"
      >
        Omicron
      </span>
    </a>

    <nav class="hidden items-center gap-7 md:flex">
      {#each links as link (link.href)}
        <a
          href={link.href}
          class="rounded-md px-1 py-0.5 text-[15px] font-medium text-[#2a2f36] [text-shadow:0_1px_10px_rgba(255,255,255,0.9)] transition-colors hover:text-black dark:text-[#b4bcc4] dark:[text-shadow:none] dark:hover:text-white"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-3 sm:gap-4">
      <ThemeToggle />
      <Button.Root
        href="https://omicron.blog/register"
        class="inline-flex h-10 items-center justify-center rounded-full bg-[#101318] px-5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#262b31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] active:bg-black dark:bg-[#e8e9f2] dark:text-[#101318] dark:hover:bg-white dark:focus-visible:outline-[#8c7bff] dark:active:bg-[#c9cad8]"
      >
        Get Started
      </Button.Root>
    </div>
  </div>
</header>
