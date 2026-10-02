<script lang="ts">
  import type { GetImageResult } from "astro:assets";

  type TeamMember = {
    name: string;
    role: string;
    image: GetImageResult;
    position: string;
  };

  let { members }: { members: TeamMember[] } = $props();
</script>

<section
  id="team"
  class="border-t border-[#e8e4dc] bg-[#faf8f4] dark:border-white/8 dark:bg-[#10141b]"
>
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <div class="mx-auto max-w-[560px] text-center">
      <p class="text-[13px] font-semibold tracking-[0.12em] text-[#5b4fc4] uppercase dark:text-[#ab92f0]">
        The team
      </p>
      <h2 class="mt-4 font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px] dark:text-[#f4f4ef]">
        The people behind Omicron.
      </h2>
    </div>

    <div class="mx-auto mt-14 grid max-w-[1040px] grid-cols-1 gap-x-8 gap-y-12 min-[480px]:grid-cols-2 sm:grid-cols-6 sm:gap-y-14">
      {#each members as member, index (member.name)}
        <article class="text-center sm:col-span-2 {index === 3 ? 'sm:col-start-2' : ''}">
          <img
            src={member.image.src}
            width={member.image.attributes.width}
            height={member.image.attributes.height}
            alt={member.name}
            loading="lazy"
            class="mx-auto aspect-square w-full max-w-[200px] rounded-full border-4 border-white object-cover shadow-[0_10px_24px_rgba(16,20,24,0.12)] dark:border-[#252b35]"
            style:object-position={member.position}
          />
          <h3 class="mt-5 font-serif text-[21px] leading-[1.15] font-bold tracking-tight text-[#101418] dark:text-[#f4f4ef]">
            {member.name}
          </h3>
          <p class="mt-2 text-[14px] leading-[1.4] text-[#606873] dark:text-[#a9b2bd]">
            {member.role}
          </p>
        </article>
      {/each}
    </div>
  </div>
</section>
