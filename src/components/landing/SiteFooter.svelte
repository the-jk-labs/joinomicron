<script lang="ts">
  import { Rss } from "@lucide/svelte";

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
        { label: "Team", href: "#team" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
        { label: "Privacy", href: "#" },
      ],
    },
  ];
</script>

<footer class="bg-[#101318] text-[#c9cdd3] dark:border-t dark:border-white/8 dark:bg-[#07090d]">
  <div class="mx-auto max-w-[1200px] px-6 pt-16 pb-10 sm:px-10 sm:pt-20">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <!-- brand -->
      <div>
        <a href="/" class="inline-flex items-center gap-2.5">
          <img src="/logo.png" alt="Omicron" class="h-10 w-10" />
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
                  <a href={link.href} class="text-[14px] text-[#9aa1a9] transition-colors hover:text-white">
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
      class="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left"
    >
      <p class="text-[13px] text-[#7d848d]">Copyright &copy; 2026 Omicron. Free and open source software.</p>
      <div class="flex items-center gap-5">
        <a
          href="https://github.com/the-jk-labs"
          aria-label="GitHub"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="size-5" aria-hidden="true">
            <path
              d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
            ></path>
          </svg>
        </a>
        <a
          href="https://fosstodon.org/@OmicronHQ"
          aria-label="Mastodon"
          class="text-[#9aa1a9] transition-colors hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
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
