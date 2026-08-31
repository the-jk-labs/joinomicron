<script lang="ts">
  import { Github, Rss, Linkedin } from "lucide-svelte";

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
        { label: "Documentation", href: "https://docs.omicron.blog/" },
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
          href="https://github.com/the-jk-labs"
          aria-label="GitHub"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <Github class="h-5 w-5" />
        </a>
        <a
          href="https://fosstodon.org/@OmicronHQ"
          aria-label="Mastodon"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.412 1.526-3.412 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.52 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.105h-2.497v-6.14c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.35c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.945v6.14H4.832V8.284c0-1.289.328-2.313.987-3.07.68-.758 1.569-1.146 2.674-1.146 1.278 0 2.246.491 2.886 1.474L12 6.585l.622-1.043c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.146.658.757.986 1.781.986 3.07l.001 5.7z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/135246177/"
          aria-label="LinkedIn"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <Linkedin class="h-5 w-5" />
        </a>
        <a
          href="https://omicron.blog/@omicronhq/feed.xml"
          aria-label="RSS feed"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <Rss class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
