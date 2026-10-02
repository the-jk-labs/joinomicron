<script lang="ts">
  import type { GetImageResult } from "astro:assets";
  import { Github, Globe, Linkedin, Mail, Terminal } from "lucide-svelte";

  type ContactLink = {
    label: string;
    href: string;
    icon: string;
  };

  type TeamMember = {
    name: string;
    role: string;
    image: GetImageResult;
    position: string;
    scale?: number;
    contacts?: ContactLink[];
  };

  let { members }: { members: TeamMember[] } = $props();
</script>

<section
  id="team"
  aria-labelledby="team-heading"
  class="scroll-mt-16 border-t border-[#e8e4dc] bg-[#faf8f4] dark:border-white/8 dark:bg-[#10141b]"
>
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <div class="mx-auto max-w-[560px] text-center">
      <h2 id="team-heading" class="font-serif text-[36px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[44px] dark:text-[#f4f4ef]">
        Meet the team
      </h2>
      <p class="mx-auto mt-5 max-w-[440px] text-[16px] leading-[1.7] text-pretty text-[#606873] sm:text-[17px] dark:text-[#a9b2bd]">
        We build, test, and secure Omicron so writers can focus on what matters:
        their words.
      </p>
    </div>

    <div class="mx-auto mt-14 grid max-w-[960px] grid-cols-2 gap-x-8 gap-y-0 min-[560px]:grid-cols-4 md:mt-16 md:grid-cols-6 md:gap-x-10">
      {#each members as member, index (member.name)}
        <article class="col-span-2 row-span-4 grid grid-rows-subgrid justify-items-center pb-12 text-center last:pb-0 md:pb-16 md:[&:nth-child(n+4)]:pb-0 {index === 3 ? 'md:col-start-2' : ''} {index === 4 ? 'min-[560px]:col-start-2 md:col-start-auto' : ''}">
          <div class="mb-6 w-[180px] rounded-full bg-white p-1.5 ring-1 ring-[#e8e4dc] sm:w-[192px] dark:bg-[#1b2029] dark:ring-white/10">
            <div class="aspect-square overflow-hidden rounded-full bg-[#e8e4dc] dark:bg-[#252b35]">
              <img
                src={member.image.src}
                width={member.image.attributes.width}
                height={member.image.attributes.height}
                alt={member.name}
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
                style:object-position={member.position}
                style:transform-origin={member.position}
                style:transform="scale({member.scale ?? 1})"
              />
            </div>
          </div>
          <h3 class="mb-2 max-w-[250px] text-[19px] leading-[1.4] font-semibold tracking-[-0.025em] text-balance text-[#101418] sm:text-[20px] dark:text-[#f4f4ef]">
            {member.name}
          </h3>
          <p class="mb-4 max-w-[260px] text-[14px] leading-[1.6] text-[#606873] dark:text-[#a9b2bd]">
            {member.role}
          </p>
          {#if member.contacts}
            <ul aria-label="Contact links for {member.name}" class="flex max-w-[264px] flex-wrap content-start justify-center gap-0.5">
              {#each member.contacts as contact (contact.href)}
                <li>
                  <a
                    href={contact.href}
                    aria-label={contact.label}
                    title={contact.label}
                    target={contact.icon === "mail" ? undefined : "_blank"}
                    rel={contact.icon === "mail" ? undefined : "noopener noreferrer"}
                    class="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#606873] transition-colors hover:bg-[#ece8f7] hover:text-[#5b4fc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fc4] dark:text-[#a9b2bd] dark:hover:bg-[#7c6cff]/15 dark:hover:text-[#c8bfff] dark:focus-visible:outline-[#ab92f0]"
                  >
                    {#if contact.icon === "mail"}
                      <Mail class="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                    {:else if contact.icon === "website"}
                      <Globe class="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                    {:else if contact.icon === "github"}
                      <Github class="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                    {:else if contact.icon === "tryhackme"}
                      <Terminal class="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                    {:else if contact.icon === "mastodon"}
                      <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                        <path
                          d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.412 1.526-3.412 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.52 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.105h-2.497v-6.14c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.35c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.945v6.14H4.832V8.284c0-1.289.328-2.313.987-3.07.68-.758 1.569-1.146 2.674-1.146 1.278 0 2.246.491 2.886 1.474L12 6.585l.622-1.043c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.146.658.757.986 1.781.986 3.07l.001 5.7z"
                        />
                      </svg>
                    {:else if contact.icon === "linkedin"}
                      <Linkedin class="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                    {:else if contact.icon === "x"}
                      <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                      </svg>
                    {:else if contact.icon === "orcid"}
                      <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
                      </svg>
                    {:else if contact.icon === "facebook"}
                      <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.02 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.093 24 12.073z" />
                      </svg>
                    {:else}
                      <img src="/logo.png" alt="" class="h-[18px] w-[18px]" />
                    {/if}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>
