<script lang="ts">
  import { Button } from "bits-ui";

  const links = [
    { href: "#story", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
</script>

<header
  class="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/60 backdrop-blur-md"
>
  <div
    class="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-10"
  >
    <a href="/" class="inline-flex items-center gap-2.5">
      <img src="/logo.png" alt="Omicron" class="h-9 w-9" />
      <span class="text-[17px] font-semibold tracking-tight text-[#101418]">
        Omicron
      </span>
    </a>

    <nav class="hidden items-center gap-7 md:flex">
      {#each links as link (link.href)}
        <a
          href={link.href}
          class="rounded-md px-1 py-0.5 text-[15px] font-medium text-[#2a2f36] [text-shadow:0_1px_10px_rgba(255,255,255,0.9)] transition-colors hover:text-black"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <Button.Root
      href="https://omicron.blog/signup"
      class="inline-flex h-10 items-center justify-center rounded-full bg-[#101318] px-5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#262b31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] active:bg-black"
    >
      Get Started
    </Button.Root>
  </div>
</header>
