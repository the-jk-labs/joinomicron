<script lang="ts">
  import { Github, Rss, AtSign } from "lucide-svelte";

  const columns = [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#" },
        { label: "Roadmap", href: "#" },
        { label: "Self-hosting", href: "#" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Source code", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Blog", href: "https://omicron.blog" },
        { label: "Brand assets", href: "#" },
      ],
    },
    {
      heading: "Project",
      links: [
        { label: "About", href: "#story" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
        { label: "Privacy", href: "#" },
      ],
    },
  ];
</script>

<footer class="bg-[#101318] text-[#c9cdd3]">
  <div class="mx-auto max-w-[1200px] px-6 pt-16 pb-10 sm:px-10 sm:pt-20">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <!-- brand -->
      <div>
        <a href="/" class="inline-flex items-center gap-2.5">
          <img src="/logo.png" alt="Omicron" class="h-10 w-10 invert" />
        </a>
        <p class="mt-4 max-w-[300px] text-[15px] leading-[1.6] text-[#9aa1a9]">
          A federated blogging platform that belongs to everyone.
        </p>
      </div>

      <!-- link columns -->
      <div class="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
        {#each columns as column (column.heading)}
          <nav aria-label={column.heading}>
            <h3 class="text-[13px] font-semibold tracking-[0.08em] text-white uppercase">
              {column.heading}
            </h3>
            <ul class="mt-4 space-y-2.5">
              {#each column.links as link (link.label)}
                <li>
                  <a
                    href={link.href}
                    class="text-[14px] text-[#9aa1a9] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
        {/each}
      </div>
    </div>

    <!-- bottom row -->
    <div
      class="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8"
    >
      <p class="text-[13px] text-[#7d848d]">
        Copyright &copy; 2026 Omicron. Free and open source software.
      </p>
      <div class="flex items-center gap-5">
        <a
          href="https://github.com"
          aria-label="Source code"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <Github class="h-5 w-5" />
        </a>
        <a
          href="https://omicron.blog"
          aria-label="Blog feed"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <Rss class="h-5 w-5" />
        </a>
        <a
          href="https://omicron.blog"
          aria-label="Omicron on the fediverse"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <AtSign class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
